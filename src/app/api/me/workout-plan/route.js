import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getWorkoutPlanState } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getWorkoutPlanState(client._id));
  });
}
