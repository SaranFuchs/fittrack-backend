import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { paginationSchema, workoutSubmissionSchema } from "@/lib/validation";
import { createWorkout, listWorkouts } from "@/services/workoutService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return { trainer, client };
}

export async function GET(request, context) {
  return withErrorHandling(async () => {
    const { client } = await authorize(request, context);
    const query = paginationSchema.parse(Object.fromEntries(new URL(request.url).searchParams));
    return dataResponse(await listWorkouts(client._id, query));
  });
}

export async function POST(request, context) {
  return withErrorHandling(async () => {
    const { trainer, client } = await authorize(request, context);
    const input = workoutSubmissionSchema.parse(await readJson(request));
    return dataResponse(
      await createWorkout({ clientId: client._id, recordedByUserId: trainer._id, input }),
      { status: 201 },
    );
  });
}
