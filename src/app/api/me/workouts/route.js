import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { paginationSchema, workoutSubmissionSchema } from "@/lib/validation";
import { createWorkout, listWorkouts } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const query = paginationSchema.parse(Object.fromEntries(new URL(request.url).searchParams));
    return dataResponse(await listWorkouts(client._id, query));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const input = workoutSubmissionSchema.parse(await readJson(request));
    return dataResponse(
      await createWorkout({ clientId: client._id, recordedByUserId: client._id, input }),
      { status: 201 },
    );
  });
}
