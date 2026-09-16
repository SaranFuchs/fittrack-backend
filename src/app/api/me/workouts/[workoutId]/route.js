import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getWorkout } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { workoutId } = await params;
    return dataResponse(await getWorkout(client._id, workoutId));
  });
}
