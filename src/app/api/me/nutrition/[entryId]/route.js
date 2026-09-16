import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse, emptyResponse } from "@/lib/responses";
import { nutritionEntrySchema } from "@/lib/validation";
import { deleteNutritionEntry, updateNutritionEntry } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function PATCH(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { entryId } = await params;
    const input = nutritionEntrySchema.parse(await readJson(request));
    return dataResponse(await updateNutritionEntry(client._id, entryId, input));
  });
}

export async function DELETE(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { entryId } = await params;
    await deleteNutritionEntry(client._id, entryId);
    return emptyResponse();
  });
}
