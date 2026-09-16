import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  targetSets: { type: Number, default: null, min: 1, max: 20 },
  targetReps: { type: Number, default: null, min: 1, max: 100 },
  suggestedWeightKg: { type: Number, default: null, min: 0, max: 1000 },
  notes: { type: String, trim: true, maxlength: 500, default: "" },
});

const workoutDaySchema = new mongoose.Schema(
  {
    dayNumber: { type: Number, required: true, min: 1, max: 7 },
    name: { type: String, trim: true, maxlength: 100, default: "" },
    exercises: {
      type: [exerciseSchema],
      validate: [(value) => value.length >= 1, "Each day needs an exercise."],
    },
  },
  { _id: false },
);

const clientProfileSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    fitnessProfile: {
      age: { type: Number, required: true, min: 1, max: 120 },
      heightCm: { type: Number, required: true, min: Number.MIN_VALUE, max: 300 },
      weightKg: { type: Number, required: true, min: Number.MIN_VALUE, max: 500 },
      biologicalSex: { type: String, required: true, enum: ["male", "female"] },
      activityLevel: { type: String, required: true, enum: ["sedentary", "light", "moderate", "very_active", "extra_active"] },
      goal: { type: String, required: true, enum: ["maintain", "lose", "gain"] },
    },
    nutritionTarget: {
      calories: { type: Number, required: true, min: Number.MIN_VALUE },
      proteinGrams: { type: Number, required: true, min: Number.MIN_VALUE },
    },
    workoutPlan: {
      revision: { type: Number, required: true, min: 1, default: 1 },
      days: {
        type: [workoutDaySchema],
        validate: [(value) => value.length >= 1 && value.length <= 7, "Plan must have 1 to 7 days."],
      },
    },
  },
  { timestamps: true },
);

export default mongoose.models.ClientProfile || mongoose.model("ClientProfile", clientProfileSchema);
