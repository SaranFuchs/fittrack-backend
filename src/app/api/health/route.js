import { dataResponse } from "@/lib/responses";

export const runtime = "nodejs";

export function GET() {
  return dataResponse({ status: "ok" });
}
