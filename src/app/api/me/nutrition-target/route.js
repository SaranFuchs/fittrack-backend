import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getNutritionTarget } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getNutritionTarget(client._id));
  });
}
