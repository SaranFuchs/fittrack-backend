const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

const userSchema = new mongoose.Schema({
  name: String, email: { type: String, unique: true }, passwordHash: String, role: String, trainerId: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });
const exerciseSchema = new mongoose.Schema({ name: String, targetSets: Number, targetReps: Number, suggestedWeightKg: Number, notes: String });
const workoutDaySchema = new mongoose.Schema({
  dayNumber: Number, name: String, exercises: [exerciseSchema],
}, { _id: false });
const profileSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, unique: true },
  fitnessProfile: mongoose.Schema.Types.Mixed,
  nutritionTarget: mongoose.Schema.Types.Mixed,
  workoutPlan: { revision: Number, days: [workoutDaySchema] },
}, { timestamps: true });
const workoutSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId, recordedByUserId: mongoose.Schema.Types.ObjectId,
  completedDate: String, workoutDayNumber: Number, workoutDayName: String,
  planRevision: Number, cycleNumber: Number, exercises: [mongoose.Schema.Types.Mixed],
}, { timestamps: { createdAt: true, updatedAt: false } });
const nutritionSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId, logDate: String, foodName: String,
  calories: Number, proteinGrams: Number, notes: String,
}, { timestamps: true });

const demoClients = [
  {
    name: "Alex Morgan", email: "alex.client@fittrack.local",
    fitnessProfile: { age: 29, heightCm: 175, weightKg: 74, biologicalSex: "male", activityLevel: "moderate", goal: "gain" },
    nutritionTarget: { calories: 2700, proteinGrams: 160 },
    days: [
      { name: "Push Strength", exercises: [["Incline Bench Press", 3, 10, 55, "Keep shoulder blades retracted."], ["Cable Fly", 3, 12, 15, "Control the stretch."]] },
      { name: "Lower Body", exercises: [["Back Squat", 4, 8, 80, "Brace before each rep."], ["Romanian Deadlift", 3, 10, 60, "Keep the bar close."]] },
      { name: "Pull & Core", exercises: [["Lat Pulldown", 3, 12, 50, "Lead with the elbows."], ["Plank", null, null, null, "Three controlled holds."]] },
    ],
  },
  {
    name: "Jamie Lee", email: "jamie.client@fittrack.local",
    fitnessProfile: { age: 34, heightCm: 164, weightKg: 62, biologicalSex: "female", activityLevel: "light", goal: "maintain" },
    nutritionTarget: { calories: 1950, proteinGrams: 120 },
    days: [
      { name: "Full Body A", exercises: [["Goblet Squat", 3, 12, 18, "Smooth tempo."], ["Dumbbell Row", 3, 10, 14, "Pause at the top."]] },
      { name: "Full Body B", exercises: [["Hip Thrust", 3, 10, 50, "Full lockout."], ["Dumbbell Shoulder Press", 3, 10, 10, "Avoid arching."]] },
    ],
  },
];

async function main() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required. Run npm run setup:local first.");
  await mongoose.connect(process.env.MONGODB_URI);
  const User = mongoose.models.User || mongoose.model("User", userSchema);
  const ClientProfile = mongoose.models.ClientProfile || mongoose.model("ClientProfile", profileSchema);
  const WorkoutSession = mongoose.models.WorkoutSession || mongoose.model("WorkoutSession", workoutSchema);
  const NutritionEntry = mongoose.models.NutritionEntry || mongoose.model("NutritionEntry", nutritionSchema);

  const trainerEmail = (process.env.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local").toLowerCase();
  const trainerPassword = process.env.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026";
  const trainer = await User.findOneAndUpdate(
    { email: trainerEmail },
    { $set: { name: process.env.TRAINER_SEED_NAME || "Demo Trainer", passwordHash: await bcrypt.hash(trainerPassword, 12), role: "trainer", trainerId: null } },
    { returnDocument: "after", upsert: true, setDefaultsOnInsert: true },
  );

  const clientPasswordHash = await bcrypt.hash("ClientDemo!2026", 12);
  for (const seed of demoClients) {
    const oldClient = await User.findOne({ email: seed.email });
    if (oldClient) {
      await Promise.all([
        ClientProfile.deleteMany({ clientId: oldClient._id }),
        WorkoutSession.deleteMany({ clientId: oldClient._id }),
        NutritionEntry.deleteMany({ clientId: oldClient._id }),
      ]);
      await User.deleteOne({ _id: oldClient._id });
    }

    const client = await User.create({
      name: seed.name, email: seed.email, passwordHash: clientPasswordHash, role: "client", trainerId: trainer._id,
    });
    const profile = await ClientProfile.create({
      clientId: client._id, fitnessProfile: seed.fitnessProfile, nutritionTarget: seed.nutritionTarget,
      workoutPlan: {
        revision: 1,
        days: seed.days.map((day, dayIndex) => ({
          dayNumber: dayIndex + 1, name: day.name,
          exercises: day.exercises.map(([name, targetSets, targetReps, suggestedWeightKg, notes]) => ({ name, targetSets, targetReps, suggestedWeightKg, notes })),
        })),
      },
    });

    const firstDay = profile.workoutPlan.days[0];
    await WorkoutSession.create({
      clientId: client._id, recordedByUserId: client._id, completedDate: dateOffset(-2),
      workoutDayNumber: 1, workoutDayName: firstDay.name, planRevision: 1, cycleNumber: 1,
      exercises: firstDay.exercises.map((exercise) => ({
        planExerciseId: exercise._id, exerciseName: exercise.name,
        targetSnapshot: { sets: exercise.targetSets, reps: exercise.targetReps, suggestedWeightKg: exercise.suggestedWeightKg, notes: exercise.notes },
        sets: exercise.targetSets ? Array.from({ length: exercise.targetSets }, (_, index) => ({ setNumber: index + 1, reps: exercise.targetReps, weightKg: exercise.suggestedWeightKg })) : [],
        notes: "Seeded demo workout",
        progressionStatus: exercise.targetSets && exercise.suggestedWeightKg != null ? "READY_TO_PROGRESS" : "NOT_APPLICABLE",
      })),
    });

    await NutritionEntry.insertMany([
      { clientId: client._id, logDate: dateOffset(0), foodName: "Greek yogurt and berries", calories: 310, proteinGrams: 25, notes: "Breakfast" },
      { clientId: client._id, logDate: dateOffset(0), foodName: "Chicken rice bowl", calories: 680, proteinGrams: 48, notes: "Lunch" },
      { clientId: client._id, logDate: dateOffset(0), foodName: "Protein shake", calories: 220, proteinGrams: 30, notes: "Post-workout" },
    ]);
  }

  console.log("Demo data seeded successfully.");
  console.log(`Trainer login: ${trainerEmail}`);
  console.log("Client logins: alex.client@fittrack.local, jamie.client@fittrack.local");
}

main()
  .catch((error) => {
    console.error(`Demo seed failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
