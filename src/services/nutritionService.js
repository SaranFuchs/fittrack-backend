import mongoose from "mongoose";
import { assertNotFuture, todayDateString } from "@/lib/dates";
import { ApiError } from "@/lib/errors";
import { dateSchema } from "@/lib/validation";
import ClientProfile from "@/models/ClientProfile";
import NutritionEntry from "@/models/NutritionEntry";

export function requestedDate(request) {
  const value = new URL(request.url).searchParams.get("date") || todayDateString();
  const date = dateSchema.parse(value);
  assertNotFuture(date, "Nutrition date");
  return date;
}

export async function getDailyNutrition(clientId, date) {
  const [profile, entries] = await Promise.all([
    ClientProfile.findOne({ clientId }).lean(),
    NutritionEntry.find({ clientId, logDate: date }).sort({ createdAt: -1 }).lean(),
  ]);
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  const totals = entries.reduce(
    (sum, entry) => ({
      calories: sum.calories + entry.calories,
      proteinGrams: sum.proteinGrams + entry.proteinGrams,
    }),
    { calories: 0, proteinGrams: 0 },
  );
  const target = profile.nutritionTarget;
  return {
    date,
    entries,
    totals,
    target,
    remaining: {
      calories: target.calories - totals.calories,
      proteinGrams: target.proteinGrams - totals.proteinGrams,
    },
  };
}

export async function createNutritionEntry(clientId, input) {
  assertNotFuture(input.logDate, "Nutrition date");
  return NutritionEntry.create({ ...input, clientId });
}

export async function updateNutritionEntry(clientId, entryId, input) {
  assertNotFuture(input.logDate, "Nutrition date");
  if (!mongoose.isValidObjectId(entryId)) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
  const entry = await NutritionEntry.findOneAndUpdate(
    { _id: entryId, clientId },
    { $set: input },
    { returnDocument: "after", runValidators: true },
  );
  if (!entry) throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  return entry;
}

export async function deleteNutritionEntry(clientId, entryId) {
  if (!mongoose.isValidObjectId(entryId)) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
  const result = await NutritionEntry.deleteOne({ _id: entryId, clientId });
  if (!result.deletedCount) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
}
