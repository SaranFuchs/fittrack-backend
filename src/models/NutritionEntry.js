import mongoose from "mongoose";

const nutritionEntrySchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    logDate: { type: String, required: true },
    foodName: { type: String, required: true, trim: true, maxlength: 150 },
    calories: { type: Number, required: true, min: 0, max: 10000 },
    proteinGrams: { type: Number, required: true, min: 0, max: 1000 },
    notes: { type: String, trim: true, maxlength: 500, default: "" },
  },
  { timestamps: true },
);

nutritionEntrySchema.index({ clientId: 1, logDate: 1 });
nutritionEntrySchema.index({ clientId: 1, createdAt: -1 });

export default mongoose.models.NutritionEntry || mongoose.model("NutritionEntry", nutritionEntrySchema);
