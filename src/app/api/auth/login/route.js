import bcrypt from "bcrypt";
import { createToken } from "@/lib/auth";
import { connectDatabase } from "@/lib/db";
import { ApiError, readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { serializeUser } from "@/lib/serializers";
import { loginSchema } from "@/lib/validation";
import User from "@/models/User";

export const runtime = "nodejs";

export async function POST(request) {
  return withErrorHandling(async () => {
    const input = loginSchema.parse(await readJson(request));
    await connectDatabase();
    const user = await User.findOne({ email: input.email }).select("+passwordHash");
    if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) {
      throw new ApiError(401, "INVALID_CREDENTIALS", "Invalid email or password.");
    }
    return dataResponse({ token: createToken(user), user: serializeUser(user) });
  });
}
