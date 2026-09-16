import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse, emptyResponse } from "@/lib/responses";
import { updateClientSchema } from "@/lib/validation";
import { deleteClient, getClientDetail, updateClient } from "@/services/clientService";

export const runtime = "nodejs";

async function ownedClient(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  return getOwnedClientOrThrow(trainer._id, clientId);
}

export async function GET(request, context) {
  return withErrorHandling(async () => dataResponse(await getClientDetail(await ownedClient(request, context))));
}

export async function PATCH(request, context) {
  return withErrorHandling(async () => {
    const client = await ownedClient(request, context);
    const input = updateClientSchema.parse(await readJson(request));
    return dataResponse(await updateClient(client, input));
  });
}

export async function DELETE(request, context) {
  return withErrorHandling(async () => {
    const client = await ownedClient(request, context);
    await deleteClient(client._id);
    return emptyResponse();
  });
}
