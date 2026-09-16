import bcrypt from "bcrypt";
import { authenticateRequest } from "@/lib/auth";
import { ApiError, readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { passwordUpdateSchema } from "@/lib/validation";
import User from "@/models/User";

export const runtime = "nodejs";

export async function PUT(request) {
  return withErrorHandling(async () => {
    const authenticated = await authenticateRequest(request);
    const input = passwordUpdateSchema.parse(await readJson(request));
    const user = await User.findById(authenticated._id).select("+passwordHash");
    if (!(await bcrypt.compare(input.currentPassword, user.passwordHash))) {
      throw new ApiError(401, "INVALID_CREDENTIALS", "Current password is incorrect.");
    }
    user.passwordHash = await bcrypt.hash(input.newPassword, 12);
    await user.save();
    return dataResponse({ message: "Password updated successfully." });
  });
}
