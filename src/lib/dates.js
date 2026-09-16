import { ApiError } from "@/lib/errors";

export function todayDateString(now = new Date()) {
  return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
}

export function assertNotFuture(date, label = "Date") {
  if (date > todayDateString()) {
    throw new ApiError(400, "VALIDATION_ERROR", `${label} cannot be in the future.`, {
      date: `${label} cannot be in the future.`,
    });
  }
}
