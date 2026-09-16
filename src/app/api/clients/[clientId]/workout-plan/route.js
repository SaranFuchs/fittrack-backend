import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { workoutPlanSchema } from "@/lib/validation";
import { getWorkoutPlanState, updateWorkoutPlan } from "@/services/clientService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return client._id;
}

export async function GET(request, context) {
  return withErrorHandling(async () => dataResponse(await getWorkoutPlanState(await authorize(request, context))));
}

export async function PUT(request, context) {
  return withErrorHandling(async () => {
    const clientId = await authorize(request, context);
    const input = workoutPlanSchema.parse(await readJson(request));
    return dataResponse(await updateWorkoutPlan(clientId, input));
  });
}
