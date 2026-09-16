import { authenticateRequest } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { serializeUser } from "@/lib/serializers";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => dataResponse(serializeUser(await authenticateRequest(request))));
}
