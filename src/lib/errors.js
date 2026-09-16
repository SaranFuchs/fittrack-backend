import { ZodError } from "zod";

export class ApiError extends Error {
  constructor(status, code, message, fields) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
  }
}

function zodFields(error) {
  return Object.fromEntries(
    error.issues.map((issue) => [issue.path.join(".") || "request", issue.message]),
  );
}

export function errorResponse(error) {
  if (error instanceof ZodError) {
    return Response.json(
      {
        error: {
          code: "VALIDATION_ERROR",
          message: "The submitted data is invalid.",
          fields: zodFields(error),
        },
      },
      { status: 400 },
    );
  }

  if (error instanceof ApiError) {
    const body = { code: error.code, message: error.message };
    if (error.fields) body.fields = error.fields;
    return Response.json({ error: body }, { status: error.status });
  }

  if (error?.code === 11000) {
    return Response.json(
      { error: { code: "EMAIL_ALREADY_EXISTS", message: "That email is already in use." } },
      { status: 409 },
    );
  }

  console.error("Unexpected API error", error);
  return Response.json(
    { error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred." } },
    { status: 500 },
  );
}

export async function withErrorHandling(operation) {
  try {
    return await operation();
  } catch (error) {
    return errorResponse(error);
  }
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    throw new ApiError(400, "VALIDATION_ERROR", "A valid JSON body is required.");
  }
}
