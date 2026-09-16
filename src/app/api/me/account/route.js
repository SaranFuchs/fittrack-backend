import bcrypt from "bcrypt";
import { authenticateRequest } from "@/lib/auth";
import { ApiError, readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { serializeUser } from "@/lib/serializers";
import { emailUpdateSchema } from "@/lib/validation";
import User from "@/models/User";

export const runtime = "nodejs";

export async function PATCH(request) {
  return withErrorHandling(async () => {
    const authenticated = await authenticateRequest(request);
    const input = emailUpdateSchema.parse(await readJson(request));
    const user = await User.findById(authenticated._id).select("+passwordHash");
    if (!(await bcrypt.compare(input.currentPassword, user.passwordHash))) {
      throw new ApiError(401, "INVALID_CREDENTIALS", "Current password is incorrect.");
    }
    const duplicate = await User.exists({ email: input.email, _id: { $ne: user._id } });
    if (duplicate) throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "That email is already in use.");
    user.email = input.email;
    await user.save();
    return dataResponse(serializeUser(user));
  });
}
