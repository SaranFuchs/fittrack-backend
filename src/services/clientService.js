import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { ApiError } from "@/lib/errors";
import { calculateWorkoutCycle } from "@/lib/workoutCycle";
import ClientProfile from "@/models/ClientProfile";
import NutritionEntry from "@/models/NutritionEntry";
import User from "@/models/User";
import WorkoutSession from "@/models/WorkoutSession";

export async function createClient(trainerId, input) {
  if (await User.exists({ email: input.account.email })) {
    throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "That email is already in use.");
  }

  const client = await User.create({
    name: input.account.name,
    email: input.account.email,
    passwordHash: await bcrypt.hash(input.account.password, 12),
    role: "client",
    trainerId,
  });

  try {
    const profile = await ClientProfile.create({
      clientId: client._id,
      fitnessProfile: input.fitnessProfile,
      nutritionTarget: input.nutritionTarget,
      workoutPlan: { revision: 1, days: input.workoutPlan.days },
    });
    return clientDetail(client, profile);
  } catch (error) {
    await User.deleteOne({ _id: client._id });
    throw error;
  }
}

export async function listClients(trainerId) {
  const clients = await User.find({ role: "client", trainerId }).sort({ name: 1 }).lean();
  const ids = clients.map((client) => client._id);
  const [profiles, latestWorkouts] = await Promise.all([
    ClientProfile.find({ clientId: { $in: ids } }).lean(),
    WorkoutSession.aggregate([
      { $match: { clientId: { $in: ids } } },
      { $sort: { completedDate: -1, createdAt: -1 } },
      { $group: { _id: "$clientId", latestWorkoutDate: { $first: "$completedDate" } } },
    ]),
  ]);
  const profileMap = new Map(profiles.map((profile) => [profile.clientId.toString(), profile]));
  const workoutMap = new Map(latestWorkouts.map((item) => [item._id.toString(), item.latestWorkoutDate]));

  return clients.map((client) => ({
    id: client._id.toString(),
    name: client.name,
    email: client.email,
    fitnessGoal: profileMap.get(client._id.toString())?.fitnessProfile?.goal || null,
    latestWorkoutDate: workoutMap.get(client._id.toString()) || null,
  }));
}

export function clientDetail(client, profile) {
  const plainProfile = typeof profile.toObject === "function" ? profile.toObject() : profile;
  return {
    client: { id: client._id.toString(), name: client.name, email: client.email },
    fitnessProfile: plainProfile.fitnessProfile,
    estimates: calculateBmrAndTdee(plainProfile.fitnessProfile),
    nutritionTarget: plainProfile.nutritionTarget,
  };
}

export async function getClientDetail(client) {
  const profile = await ClientProfile.findOne({ clientId: client._id });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return clientDetail(client, profile);
}

export async function updateClient(client, input) {
  const profile = await ClientProfile.findOne({ clientId: client._id });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  client.name = input.name;
  profile.fitnessProfile = input.fitnessProfile;
  await Promise.all([client.save(), profile.save()]);
  return clientDetail(client, profile);
}

export async function deleteClient(clientId) {
  await Promise.all([
    NutritionEntry.deleteMany({ clientId }),
    WorkoutSession.deleteMany({ clientId }),
    ClientProfile.deleteOne({ clientId }),
  ]);
  await User.deleteOne({ _id: clientId });
}

export async function getWorkoutPlanState(clientId) {
  const profile = await ClientProfile.findOne({ clientId }).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  const sessions = await WorkoutSession.find({ clientId, planRevision: profile.workoutPlan.revision }).lean();
  const cycle = calculateWorkoutCycle(profile.workoutPlan, sessions);

  const latestProgression = {};
  [...sessions]
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((session) => {
      session.exercises.forEach((exercise) => {
        const id = exercise.planExerciseId.toString();
        if (!latestProgression[id]) latestProgression[id] = exercise.progressionStatus;
      });
    });

  return { plan: profile.workoutPlan, cycle, latestProgression };
}

export async function updateWorkoutPlan(clientId, input) {
  const profile = await ClientProfile.findOne({ clientId });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");

  const knownIds = new Set(
    profile.workoutPlan.days.flatMap((day) => day.exercises.map((exercise) => exercise._id.toString())),
  );
  for (const day of input.days) {
    for (const exercise of day.exercises) {
      if (exercise._id && !knownIds.has(exercise._id)) {
        throw new ApiError(400, "INVALID_PLAN", "An exercise identifier does not belong to this plan.");
      }
    }
  }

  profile.workoutPlan = {
    revision: profile.workoutPlan.revision + 1,
    days: input.days.map((day) => ({
      ...day,
      exercises: day.exercises.map((exercise) => ({
        ...exercise,
        _id: exercise._id || new mongoose.Types.ObjectId(),
      })),
    })),
  };
  await profile.save();
  return getWorkoutPlanState(clientId);
}

export async function getNutritionTarget(clientId) {
  const profile = await ClientProfile.findOne({ clientId }).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return profile.nutritionTarget;
}

export async function updateNutritionTarget(clientId, target) {
  const profile = await ClientProfile.findOneAndUpdate(
    { clientId },
    { $set: { nutritionTarget: target } },
    { new: true, runValidators: true },
  ).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return profile.nutritionTarget;
}
