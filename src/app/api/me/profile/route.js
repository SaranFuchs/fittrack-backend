import { authenticateRequest, requireRole } from "@/lib/auth";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { ApiError, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import ClientProfile from "@/models/ClientProfile";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const user = requireRole(await authenticateRequest(request), "client");
    const profile = await ClientProfile.findOne({ clientId: user._id }).lean();
    if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
    return dataResponse({
      client: { id: user._id.toString(), name: user.name, email: user.email },
      fitnessProfile: profile.fitnessProfile,
      estimates: calculateBmrAndTdee(profile.fitnessProfile),
      nutritionTarget: profile.nutritionTarget,
    });
  });
}
