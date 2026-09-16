import jwt from "jsonwebtoken";
import { connectDatabase } from "@/lib/db";
import { ApiError } from "@/lib/errors";
import User from "@/models/User";

function jwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret || Buffer.byteLength(secret, "utf8") < 32) {
    throw new Error("JWT_SECRET must be configured with at least 32 bytes.");
  }
  return secret;
}

export function createToken(user) {
  return jwt.sign(
    { userId: user._id.toString(), role: user.role },
    jwtSecret(),
    { algorithm: "HS256", expiresIn: "8h" },
  );
}

export async function authenticateRequest(request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    throw new ApiError(401, "AUTH_REQUIRED", "Authentication is required.");
  }

  let payload;
  try {
    payload = jwt.verify(authorization.slice(7), jwtSecret(), { algorithms: ["HS256"] });
  } catch (error) {
    if (error?.name === "TokenExpiredError") {
      throw new ApiError(401, "TOKEN_EXPIRED", "Your session has expired. Please log in again.");
    }
    throw new ApiError(401, "TOKEN_INVALID", "Your session is invalid. Please log in again.");
  }

  await connectDatabase();
  const user = await User.findById(payload.userId);
  if (!user) throw new ApiError(401, "TOKEN_INVALID", "Your account no longer exists.");
  return user;
}

export function requireRole(user, role) {
  if (user.role !== role) {
    throw new ApiError(403, "FORBIDDEN", "You do not have permission to perform this action.");
  }
  return user;
}
