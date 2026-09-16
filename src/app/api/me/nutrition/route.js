import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { nutritionEntrySchema } from "@/lib/validation";
import { createNutritionEntry, getDailyNutrition, requestedDate } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getDailyNutrition(client._id, requestedDate(request)));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const input = nutritionEntrySchema.parse(await readJson(request));
    return dataResponse(await createNutritionEntry(client._id, input), { status: 201 });
  });
}
