import mongoose from "mongoose";
import { ApiError } from "@/lib/errors";
import User from "@/models/User";

export async function getOwnedClientOrThrow(trainerId, clientId) {
  if (!mongoose.isValidObjectId(clientId)) {
    throw new ApiError(404, "CLIENT_NOT_FOUND", "Client not found.");
  }
  const client = await User.findOne({ _id: clientId, role: "client" });
  if (!client) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client not found.");
  if (client.trainerId?.toString() !== trainerId.toString()) {
    throw new ApiError(403, "FORBIDDEN", "This client is not assigned to you.");
  }
  return client;
}
