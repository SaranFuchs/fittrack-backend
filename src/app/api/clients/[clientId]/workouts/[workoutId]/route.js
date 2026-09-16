import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { getWorkout } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const { clientId, workoutId } = await params;
    const client = await getOwnedClientOrThrow(trainer._id, clientId);
    return dataResponse(await getWorkout(client._id, workoutId));
  });
}
