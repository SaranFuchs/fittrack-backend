import mongoose from "mongoose";
import { assertNotFuture } from "@/lib/dates";
import { ApiError } from "@/lib/errors";
import { calculateProgression } from "@/lib/progression";
import { calculateWorkoutCycle } from "@/lib/workoutCycle";
import ClientProfile from "@/models/ClientProfile";
import WorkoutSession from "@/models/WorkoutSession";

export async function createWorkout({ clientId, recordedByUserId, input }) {
  assertNotFuture(input.completedDate, "Workout date");
  const profile = await ClientProfile.findOne({ clientId });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");

  const plan = profile.workoutPlan;
  const plainPlan = profile.toObject().workoutPlan;
  const workoutDay = plan.days.find((day) => day.dayNumber === input.workoutDayNumber);
  if (!workoutDay) throw new ApiError(404, "WORKOUT_DAY_NOT_FOUND", "Workout day not found.");

  const priorSessions = await WorkoutSession.find({ clientId, planRevision: plan.revision }).lean();
  const cycle = calculateWorkoutCycle(plainPlan, priorSessions);

  const submittedById = new Map(input.exercises.map((exercise) => [exercise.planExerciseId, exercise]));
  if (submittedById.size !== workoutDay.exercises.length) {
    throw new ApiError(400, "VALIDATION_ERROR", "Submit a result for every prescribed exercise.");
  }

  const exercises = workoutDay.exercises.map((planned) => {
    const submitted = submittedById.get(planned._id.toString());
    if (!submitted) throw new ApiError(400, "VALIDATION_ERROR", `Missing result for ${planned.name}.`);
    const sets = submitted.sets.map((set, index) => ({ ...set, setNumber: index + 1 }));
    return {
      planExerciseId: planned._id,
      exerciseName: planned.name,
      targetSnapshot: {
        sets: planned.targetSets,
        reps: planned.targetReps,
        suggestedWeightKg: planned.suggestedWeightKg,
        notes: planned.notes,
      },
      sets,
      notes: submitted.notes,
      progressionStatus: calculateProgression(planned, sets),
    };
  });

  const session = await WorkoutSession.create({
    clientId,
    recordedByUserId,
    completedDate: input.completedDate,
    workoutDayNumber: workoutDay.dayNumber,
    workoutDayName: workoutDay.name,
    planRevision: plan.revision,
    cycleNumber: cycle.cycleNumber,
    exercises,
  });

  const saved = session.toObject();
  return {
    session: saved,
    cycle: calculateWorkoutCycle(plainPlan, [...priorSessions, saved]),
  };
}

export async function listWorkouts(clientId, query) {
  const filter = { clientId };
  if (query.exerciseId) filter["exercises.planExerciseId"] = new mongoose.Types.ObjectId(query.exerciseId);
  const [items, total] = await Promise.all([
    WorkoutSession.find(filter)
      .populate("recordedByUserId", "name role")
      .sort({ completedDate: -1, createdAt: -1 })
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .lean(),
    WorkoutSession.countDocuments(filter),
  ]);
  return { items, page: query.page, limit: query.limit, total, pages: Math.ceil(total / query.limit) };
}

export async function getWorkout(clientId, workoutId) {
  if (!mongoose.isValidObjectId(workoutId)) {
    throw new ApiError(404, "WORKOUT_NOT_FOUND", "Workout not found.");
  }
  const workout = await WorkoutSession.findOne({ _id: workoutId, clientId })
    .populate("recordedByUserId", "name role")
    .lean();
  if (!workout) throw new ApiError(404, "WORKOUT_NOT_FOUND", "Workout not found.");
  return workout;
}
