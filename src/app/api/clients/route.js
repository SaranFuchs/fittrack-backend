import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { createClientSchema } from "@/lib/validation";
import { createClient, listClients } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    return dataResponse(await listClients(trainer._id));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const input = createClientSchema.parse(await readJson(request));
    return dataResponse(await createClient(trainer._id, input), { status: 201 });
  });
}
