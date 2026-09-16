import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { getDailyNutrition, requestedDate } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const { clientId } = await params;
    const client = await getOwnedClientOrThrow(trainer._id, clientId);
    return dataResponse(await getDailyNutrition(client._id, requestedDate(request)));
  });
}
