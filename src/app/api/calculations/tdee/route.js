import { authenticateRequest, requireRole } from "@/lib/auth";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { tdeeSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request) {
  return withErrorHandling(async () => {
    requireRole(await authenticateRequest(request), "trainer");
    const input = tdeeSchema.parse(await readJson(request));
    return dataResponse(calculateBmrAndTdee(input));
  });
}
