import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
  {
    setNumber: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 0 },
    weightKg: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const completedExerciseSchema = new mongoose.Schema(
  {
    planExerciseId: { type: mongoose.Schema.Types.ObjectId, required: true },
    exerciseName: { type: String, required: true },
    targetSnapshot: {
      sets: { type: Number, default: null },
      reps: { type: Number, default: null },
      suggestedWeightKg: { type: Number, default: null },
      notes: { type: String, default: "" },
    },
    sets: { type: [setSchema], default: [] },
    notes: { type: String, maxlength: 500, default: "" },
    progressionStatus: { type: String, required: true, enum: ["READY_TO_PROGRESS", "MAINTAIN", "NOT_APPLICABLE"] },
  },
  { _id: false },
);

const workoutSessionSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recordedByUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    completedDate: { type: String, required: true },
    workoutDayNumber: { type: Number, required: true },
    workoutDayName: { type: String, default: "" },
    planRevision: { type: Number, required: true },
    cycleNumber: { type: Number, required: true },
    exercises: { type: [completedExerciseSchema], required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

workoutSessionSchema.index({ clientId: 1, createdAt: -1 });
workoutSessionSchema.index({ clientId: 1, planRevision: 1, cycleNumber: 1 });
workoutSessionSchema.index({ clientId: 1, completedDate: 1 });
workoutSessionSchema.index(
  { clientId: 1, planRevision: 1, cycleNumber: 1, workoutDayNumber: 1 },
  { unique: true },
);

export default mongoose.models.WorkoutSession || mongoose.model("WorkoutSession", workoutSessionSchema);
