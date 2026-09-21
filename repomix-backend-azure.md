This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
`````
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
scripts/
  createTrainer.js
  seedDemo.js
  setupLocalEnv.js
  smokeApi.js
src/
  app/
    api/
      auth/
        login/
          route.js
        me/
          route.js
      calculations/
        tdee/
          route.js
      clients/
        [clientId]/
          nutrition/
            route.js
          nutrition-target/
            route.js
          workout-plan/
            route.js
          workouts/
            [workoutId]/
              route.js
            route.js
          route.js
        route.js
      health/
        route.js
      me/
        account/
          route.js
        nutrition/
          [entryId]/
            route.js
          route.js
        nutrition-target/
          route.js
        password/
          route.js
        profile/
          route.js
        workout-plan/
          route.js
        workouts/
          [workoutId]/
            route.js
          route.js
    favicon.ico
    globals.css
    layout.js
    page.js
    page.module.css
  lib/
    validation/
      index.js
    auth.js
    businessRules.test.js
    calculations.js
    dates.js
    db.js
    errors.js
    permissions.js
    progression.js
    responses.js
    serializers.js
    workoutCycle.js
  models/
    ClientProfile.js
    NutritionEntry.js
    User.js
    WorkoutSession.js
  services/
    clientService.js
    nutritionService.js
    workoutService.js
.dockerignore
.env.example
.gitignore
AGENTS.md
CLAUDE.md
Dockerfile
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
README.md
repomix-backend.md
`````

# Files

## File: public/file.svg
`````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
`````

## File: public/globe.svg
`````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
`````

## File: public/next.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
`````

## File: public/vercel.svg
`````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
`````

## File: public/window.svg
`````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
`````

## File: scripts/createTrainer.js
`````javascript
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["trainer", "client"], required: true },
    trainerId: { type: mongoose.Schema.Types.ObjectId, default: null },
  },
  { timestamps: true },
);

async function main() {
  const name = process.env.TRAINER_SEED_NAME?.trim();
  const email = process.env.TRAINER_SEED_EMAIL?.trim().toLowerCase();
  const password = process.env.TRAINER_SEED_PASSWORD;
  if (!process.env.MONGODB_URI || !name || !email || !password) {
    throw new Error("MONGODB_URI and all TRAINER_SEED_* variables are required.");
  }
  if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
    throw new Error("Trainer password must be 8 characters or more and at most 72 UTF-8 bytes.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  const User = mongoose.models.User || mongoose.model("User", userSchema);
  if (await User.exists({ email })) throw new Error(`A user already exists for ${email}.`);
  await User.create({ name, email, passwordHash: await bcrypt.hash(password, 12), role: "trainer", trainerId: null });
  console.log(`Trainer created successfully for ${email}.`);
}

main()
  .catch((error) => {
    console.error(`Trainer creation failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
`````

## File: scripts/setupLocalEnv.js
`````javascript
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const backendDirectory = path.resolve(__dirname, "..");
const atlasFile = path.resolve(backendDirectory, "..", "atlas-credentials.env");
const targetFile = path.join(backendDirectory, ".env.local");

function parseEnvironment(contents) {
  return Object.fromEntries(
    contents
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const separator = line.indexOf("=");
        return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
      }),
  );
}

if (!fs.existsSync(atlasFile)) {
  console.error("Missing ../atlas-credentials.env. Add the MongoDB Atlas credential file first.");
  process.exit(1);
}

const atlasEnvironment = parseEnvironment(fs.readFileSync(atlasFile, "utf8"));
const existingEnvironment = fs.existsSync(targetFile)
  ? parseEnvironment(fs.readFileSync(targetFile, "utf8"))
  : {};

const mongodbUri = existingEnvironment.MONGODB_URI || atlasEnvironment.MONGODB_URI;
if (!mongodbUri) {
  console.error("MONGODB_URI is missing from atlas-credentials.env.");
  process.exit(1);
}

const values = {
  MONGODB_URI: mongodbUri,
  JWT_SECRET: existingEnvironment.JWT_SECRET || crypto.randomBytes(48).toString("hex"),
  FRONTEND_ORIGIN: existingEnvironment.FRONTEND_ORIGIN || "http://localhost:5173",
  TRAINER_SEED_NAME: existingEnvironment.TRAINER_SEED_NAME || "Demo Trainer",
  TRAINER_SEED_EMAIL: existingEnvironment.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local",
  TRAINER_SEED_PASSWORD: existingEnvironment.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026",
};

const serialized = `${Object.entries(values)
  .map(([key, value]) => `${key}=${value}`)
  .join("\n")}\n`;

fs.writeFileSync(targetFile, serialized, { mode: 0o600 });
console.log("Created backend/.env.local from the supplied Atlas credentials.");
console.log("Demo trainer: demo.trainer@fittrack.local (password documented in README). ");
`````

## File: src/app/api/auth/login/route.js
`````javascript
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
`````

## File: src/app/api/auth/me/route.js
`````javascript
import { authenticateRequest } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { serializeUser } from "@/lib/serializers";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => dataResponse(serializeUser(await authenticateRequest(request))));
}
`````

## File: src/app/api/calculations/tdee/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { tdeeSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request) {
  return withErrorHandling(async () => {
    requireRole(await authenticateRequest(request), "trainer");
    const input = tdeeSchema.parse(await readJson(request));
    return dataResponse(calculateBmrAndTdee(input));
  });
}
`````

## File: src/app/api/clients/[clientId]/nutrition/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { getDailyNutrition, requestedDate } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const { clientId } = await params;
    const client = await getOwnedClientOrThrow(trainer._id, clientId);
    return dataResponse(await getDailyNutrition(client._id, requestedDate(request)));
  });
}
`````

## File: src/app/api/clients/[clientId]/nutrition-target/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { nutritionTargetSchema } from "@/lib/validation";
import { getNutritionTarget, updateNutritionTarget } from "@/services/clientService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return client._id;
}

export async function GET(request, context) {
  return withErrorHandling(async () => dataResponse(await getNutritionTarget(await authorize(request, context))));
}

export async function PUT(request, context) {
  return withErrorHandling(async () => {
    const clientId = await authorize(request, context);
    const input = nutritionTargetSchema.parse(await readJson(request));
    return dataResponse(await updateNutritionTarget(clientId, input));
  });
}
`````

## File: src/app/api/clients/[clientId]/workout-plan/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { workoutPlanSchema } from "@/lib/validation";
import { getWorkoutPlanState, updateWorkoutPlan } from "@/services/clientService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return client._id;
}

export async function GET(request, context) {
  return withErrorHandling(async () => dataResponse(await getWorkoutPlanState(await authorize(request, context))));
}

export async function PUT(request, context) {
  return withErrorHandling(async () => {
    const clientId = await authorize(request, context);
    const input = workoutPlanSchema.parse(await readJson(request));
    return dataResponse(await updateWorkoutPlan(clientId, input));
  });
}
`````

## File: src/app/api/clients/[clientId]/workouts/[workoutId]/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { getWorkout } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const { clientId, workoutId } = await params;
    const client = await getOwnedClientOrThrow(trainer._id, clientId);
    return dataResponse(await getWorkout(client._id, workoutId));
  });
}
`````

## File: src/app/api/clients/[clientId]/workouts/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { paginationSchema, workoutSubmissionSchema } from "@/lib/validation";
import { createWorkout, listWorkouts } from "@/services/workoutService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return { trainer, client };
}

export async function GET(request, context) {
  return withErrorHandling(async () => {
    const { client } = await authorize(request, context);
    const query = paginationSchema.parse(Object.fromEntries(new URL(request.url).searchParams));
    return dataResponse(await listWorkouts(client._id, query));
  });
}

export async function POST(request, context) {
  return withErrorHandling(async () => {
    const { trainer, client } = await authorize(request, context);
    const input = workoutSubmissionSchema.parse(await readJson(request));
    return dataResponse(
      await createWorkout({ clientId: client._id, recordedByUserId: trainer._id, input }),
      { status: 201 },
    );
  });
}
`````

## File: src/app/api/clients/[clientId]/route.js
`````javascript
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
`````

## File: src/app/api/clients/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { createClientSchema } from "@/lib/validation";
import { createClient, listClients } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    return dataResponse(await listClients(trainer._id));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const input = createClientSchema.parse(await readJson(request));
    return dataResponse(await createClient(trainer._id, input), { status: 201 });
  });
}
`````

## File: src/app/api/health/route.js
`````javascript
import { dataResponse } from "@/lib/responses";

export const runtime = "nodejs";

export function GET() {
  return dataResponse({ status: "ok" });
}
`````

## File: src/app/api/me/account/route.js
`````javascript
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
`````

## File: src/app/api/me/nutrition/[entryId]/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse, emptyResponse } from "@/lib/responses";
import { nutritionEntrySchema } from "@/lib/validation";
import { deleteNutritionEntry, updateNutritionEntry } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function PATCH(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { entryId } = await params;
    const input = nutritionEntrySchema.parse(await readJson(request));
    return dataResponse(await updateNutritionEntry(client._id, entryId, input));
  });
}

export async function DELETE(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { entryId } = await params;
    await deleteNutritionEntry(client._id, entryId);
    return emptyResponse();
  });
}
`````

## File: src/app/api/me/nutrition/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { nutritionEntrySchema } from "@/lib/validation";
import { createNutritionEntry, getDailyNutrition, requestedDate } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getDailyNutrition(client._id, requestedDate(request)));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const input = nutritionEntrySchema.parse(await readJson(request));
    return dataResponse(await createNutritionEntry(client._id, input), { status: 201 });
  });
}
`````

## File: src/app/api/me/nutrition-target/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getNutritionTarget } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getNutritionTarget(client._id));
  });
}
`````

## File: src/app/api/me/password/route.js
`````javascript
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
`````

## File: src/app/api/me/profile/route.js
`````javascript
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
`````

## File: src/app/api/me/workout-plan/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getWorkoutPlanState } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getWorkoutPlanState(client._id));
  });
}
`````

## File: src/app/api/me/workouts/[workoutId]/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getWorkout } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { workoutId } = await params;
    return dataResponse(await getWorkout(client._id, workoutId));
  });
}
`````

## File: src/app/api/me/workouts/route.js
`````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { paginationSchema, workoutSubmissionSchema } from "@/lib/validation";
import { createWorkout, listWorkouts } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const query = paginationSchema.parse(Object.fromEntries(new URL(request.url).searchParams));
    return dataResponse(await listWorkouts(client._id, query));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const input = workoutSubmissionSchema.parse(await readJson(request));
    return dataResponse(
      await createWorkout({ clientId: client._id, recordedByUserId: client._id, input }),
      { status: 201 },
    );
  });
}
`````

## File: src/app/globals.css
`````css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

html {
  height: 100%;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`````

## File: src/lib/validation/index.js
`````javascript
import { z } from "zod";

const trimmed = (max, message = "This field is required.") =>
  z.string().trim().min(1, message).max(max);

export const objectIdSchema = z.string().regex(/^[a-f\d]{24}$/i, "Invalid identifier.");
export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format.").refine(
  (value) => {
    const [year, month, day] = value.split("-").map(Number);
    const parsed = new Date(Date.UTC(year, month - 1, day));
    return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
  },
  "Enter a real calendar date.",
);

export const emailSchema = z.string().trim().email("Enter a valid email address.").max(254).transform((value) => value.toLowerCase());
export const passwordSchema = z.string().min(8, "Password must be at least 8 characters.").refine(
  (value) => Buffer.byteLength(value, "utf8") <= 72,
  "Password must be at most 72 UTF-8 bytes.",
);

export const fitnessProfileSchema = z.object({
  age: z.coerce.number().int().min(1).max(120),
  heightCm: z.coerce.number().positive().max(300),
  weightKg: z.coerce.number().positive().max(500),
  biologicalSex: z.enum(["male", "female"]),
  activityLevel: z.enum(["sedentary", "light", "moderate", "very_active", "extra_active"]),
  goal: z.enum(["maintain", "lose", "gain"]),
}).strict();

export const tdeeSchema = fitnessProfileSchema.omit({ goal: true });

export const nutritionTargetSchema = z.object({
  calories: z.coerce.number().positive().max(20000),
  proteinGrams: z.coerce.number().positive().max(2000),
}).strict();

const exerciseSchema = z.object({
  _id: objectIdSchema.optional(),
  name: trimmed(120),
  targetSets: z.coerce.number().int().min(1).max(20).nullable(),
  targetReps: z.coerce.number().int().min(1).max(100).nullable(),
  suggestedWeightKg: z.coerce.number().min(0).max(1000).nullable(),
  notes: z.string().trim().max(500).default(""),
}).strict().superRefine((exercise, context) => {
  if ((exercise.targetSets == null) !== (exercise.targetReps == null)) {
    context.addIssue({ code: "custom", path: ["targetSets"], message: "Sets and reps must both be set or both be empty." });
  }
});

export const workoutPlanSchema = z.object({
  days: z.array(z.object({
    dayNumber: z.coerce.number().int().min(1).max(7),
    name: z.string().trim().max(100).default(""),
    exercises: z.array(exerciseSchema).min(1, "Each workout day needs at least one exercise."),
  }).strict()).min(1).max(7),
}).strict().superRefine((plan, context) => {
  plan.days.forEach((day, index) => {
    if (day.dayNumber !== index + 1) {
      context.addIssue({ code: "custom", path: ["days", index, "dayNumber"], message: "Workout days must be sequential from Day 1." });
    }
  });
});

export const loginSchema = z.object({ email: emailSchema, password: z.string().min(1) }).strict();

export const createClientSchema = z.object({
  account: z.object({ name: trimmed(100), email: emailSchema, password: passwordSchema }).strict(),
  fitnessProfile: fitnessProfileSchema,
  nutritionTarget: nutritionTargetSchema,
  workoutPlan: workoutPlanSchema,
}).strict();

export const updateClientSchema = z.object({
  name: trimmed(100),
  fitnessProfile: fitnessProfileSchema,
}).strict();

export const emailUpdateSchema = z.object({ email: emailSchema, currentPassword: z.string().min(1) }).strict();
export const passwordUpdateSchema = z.object({ currentPassword: z.string().min(1), newPassword: passwordSchema }).strict();

const actualSetSchema = z.object({
  reps: z.coerce.number().int().min(0).max(1000),
  weightKg: z.coerce.number().min(0).max(2000),
}).strict();

export const workoutSubmissionSchema = z.object({
  workoutDayNumber: z.coerce.number().int().min(1).max(7),
  completedDate: dateSchema,
  exercises: z.array(z.object({
    planExerciseId: objectIdSchema,
    sets: z.array(actualSetSchema).max(50),
    notes: z.string().trim().max(500).default(""),
  }).strict()).min(1),
}).strict();

export const nutritionEntrySchema = z.object({
  logDate: dateSchema,
  foodName: trimmed(150),
  calories: z.coerce.number().min(0).max(10000),
  proteinGrams: z.coerce.number().min(0).max(1000),
  notes: z.string().trim().max(500).default(""),
}).strict();

export const paginationSchema = z.object({
  exerciseId: objectIdSchema.optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  page: z.coerce.number().int().min(1).default(1),
});
`````

## File: src/lib/auth.js
`````javascript
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
`````

## File: src/lib/calculations.js
`````javascript
export const ACTIVITY_FACTORS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very_active: 1.725,
  extra_active: 1.9,
};

export function calculateBmrAndTdee({ age, heightCm, weightKg, biologicalSex, activityLevel }) {
  const sexAdjustment = biologicalSex === "male" ? 5 : -161;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexAdjustment;
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(bmr * ACTIVITY_FACTORS[activityLevel]),
  };
}
`````

## File: src/lib/dates.js
`````javascript
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
`````

## File: src/lib/errors.js
`````javascript
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
`````

## File: src/lib/permissions.js
`````javascript
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
`````

## File: src/lib/progression.js
`````javascript
export const PROGRESSION = {
  READY: "READY_TO_PROGRESS",
  MAINTAIN: "MAINTAIN",
  NOT_APPLICABLE: "NOT_APPLICABLE",
};

export function calculateProgression(target, actualSets) {
  const { targetSets, targetReps, suggestedWeightKg } = target;
  if (targetSets == null || targetReps == null || suggestedWeightKg == null) {
    return PROGRESSION.NOT_APPLICABLE;
  }
  if (actualSets.length < targetSets) return PROGRESSION.MAINTAIN;

  const targetReached = actualSets
    .slice(0, targetSets)
    .every((set) => set.reps >= targetReps && set.weightKg >= suggestedWeightKg);
  return targetReached ? PROGRESSION.READY : PROGRESSION.MAINTAIN;
}
`````

## File: src/lib/responses.js
`````javascript
export function dataResponse(data, init = {}) {
  return Response.json({ data }, init);
}

export function emptyResponse() {
  return new Response(null, { status: 204 });
}

export function optionsResponse() {
  return new Response(null, { status: 204 });
}
`````

## File: src/lib/serializers.js
`````javascript
export function serializeUser(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function plainDocument(document) {
  if (!document) return document;
  return typeof document.toObject === "function" ? document.toObject() : document;
}
`````

## File: src/lib/workoutCycle.js
`````javascript
export function calculateWorkoutCycle(plan, sessions) {
  const dayNumbers = plan.days.map((day) => day.dayNumber).sort((a, b) => a - b);
  const relevantSessions = sessions.filter((session) => session.planRevision === plan.revision);
  const highestCycle = relevantSessions.reduce(
    (highest, session) => Math.max(highest, session.cycleNumber),
    0,
  );

  let cycleNumber = highestCycle || 1;
  const highestCompleted = new Set(
    relevantSessions
      .filter((session) => session.cycleNumber === highestCycle)
      .map((session) => session.workoutDayNumber),
  );
  if (highestCycle && dayNumbers.every((number) => highestCompleted.has(number))) {
    cycleNumber = highestCycle + 1;
  }

  const completed = new Set(
    relevantSessions
      .filter((session) => session.cycleNumber === cycleNumber)
      .map((session) => session.workoutDayNumber),
  );
  const nextSuggestedDayNumber = dayNumbers.find((number) => !completed.has(number)) ?? null;

  return {
    cycleNumber,
    nextSuggestedDayNumber,
    completedCount: completed.size,
    totalDays: dayNumbers.length,
    days: dayNumbers.map((dayNumber) => ({
      dayNumber,
      status: completed.has(dayNumber)
        ? "COMPLETED"
        : dayNumber === nextSuggestedDayNumber
          ? "NEXT_SUGGESTED"
          : "NOT_COMPLETED",
    })),
  };
}
`````

## File: src/models/ClientProfile.js
`````javascript
import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  targetSets: { type: Number, default: null, min: 1, max: 20 },
  targetReps: { type: Number, default: null, min: 1, max: 100 },
  suggestedWeightKg: { type: Number, default: null, min: 0, max: 1000 },
  notes: { type: String, trim: true, maxlength: 500, default: "" },
});

const workoutDaySchema = new mongoose.Schema(
  {
    dayNumber: { type: Number, required: true, min: 1, max: 7 },
    name: { type: String, trim: true, maxlength: 100, default: "" },
    exercises: {
      type: [exerciseSchema],
      validate: [(value) => value.length >= 1, "Each day needs an exercise."],
    },
  },
  { _id: false },
);

const clientProfileSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    fitnessProfile: {
      age: { type: Number, required: true, min: 1, max: 120 },
      heightCm: { type: Number, required: true, min: Number.MIN_VALUE, max: 300 },
      weightKg: { type: Number, required: true, min: Number.MIN_VALUE, max: 500 },
      biologicalSex: { type: String, required: true, enum: ["male", "female"] },
      activityLevel: { type: String, required: true, enum: ["sedentary", "light", "moderate", "very_active", "extra_active"] },
      goal: { type: String, required: true, enum: ["maintain", "lose", "gain"] },
    },
    nutritionTarget: {
      calories: { type: Number, required: true, min: Number.MIN_VALUE },
      proteinGrams: { type: Number, required: true, min: Number.MIN_VALUE },
    },
    workoutPlan: {
      revision: { type: Number, required: true, min: 1, default: 1 },
      days: {
        type: [workoutDaySchema],
        validate: [(value) => value.length >= 1 && value.length <= 7, "Plan must have 1 to 7 days."],
      },
    },
  },
  { timestamps: true },
);

export default mongoose.models.ClientProfile || mongoose.model("ClientProfile", clientProfileSchema);
`````

## File: src/models/NutritionEntry.js
`````javascript
import mongoose from "mongoose";

const nutritionEntrySchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    logDate: { type: String, required: true },
    foodName: { type: String, required: true, trim: true, maxlength: 150 },
    calories: { type: Number, required: true, min: 0, max: 10000 },
    proteinGrams: { type: Number, required: true, min: 0, max: 1000 },
    notes: { type: String, trim: true, maxlength: 500, default: "" },
  },
  { timestamps: true },
);

nutritionEntrySchema.index({ clientId: 1, logDate: 1 });
nutritionEntrySchema.index({ clientId: 1, createdAt: -1 });

export default mongoose.models.NutritionEntry || mongoose.model("NutritionEntry", nutritionEntrySchema);
`````

## File: src/models/User.js
`````javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true, maxlength: 254 },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, required: true, enum: ["trainer", "client"] },
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required() { return this.role === "client"; },
      index: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
`````

## File: .dockerignore
`````
node_modules

.next

.git

.gitignore

README.md

Dockerfile

.dockerignore

.env*
`````

## File: .env.example
`````
MONGODB_URI=
JWT_SECRET=
FRONTEND_ORIGIN=http://localhost:5173

TRAINER_SEED_NAME=Demo Trainer
TRAINER_SEED_EMAIL=demo.trainer@fittrack.local
TRAINER_SEED_PASSWORD=
`````

## File: AGENTS.md
`````markdown
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
`````

## File: CLAUDE.md
`````markdown
@AGENTS.md
`````

## File: Dockerfile
`````dockerfile
FROM node:22-alpine AS deps 

WORKDIR /app 

# python3/make/g++ needed to build native modules (bcrypt) 

RUN apk add --no-cache python3 make g++ 

COPY package*.json ./ 

RUN npm ci 

 

# Build stage 

FROM node:22-alpine AS builder 

WORKDIR /app 

COPY --from=deps /app/node_modules ./node_modules 

COPY . . 

RUN npm run build 

 

# Runtime stage 

FROM node:22-alpine AS runner 

WORKDIR /app 

ENV NODE_ENV=production 

 

RUN addgroup --system --gid 1001 nodejs \ 

    && adduser --system --uid 1001 nextjs 

 

COPY --from=builder /app/public ./public 

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ 

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static 

 

USER nextjs 

EXPOSE 3000 

ENV PORT=3000 

ENV HOSTNAME=0.0.0.0 

 

# Runtime secrets (MONGODB_URI, JWT_SECRET, etc.) must be provided via 

# `docker run --env-file .env.local` or your orchestrator's env config, 

# not baked into the image. 

CMD ["node", "server.js"]
`````

## File: eslint.config.mjs
`````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
`````

## File: jsconfig.json
`````json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
`````

## File: repomix-backend.md
`````markdown
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
scripts/
  createTrainer.js
  seedDemo.js
  setupLocalEnv.js
  smokeApi.js
src/
  app/
    api/
      auth/
        login/
          route.js
        me/
          route.js
      calculations/
        tdee/
          route.js
      clients/
        [clientId]/
          nutrition/
            route.js
          nutrition-target/
            route.js
          workout-plan/
            route.js
          workouts/
            [workoutId]/
              route.js
            route.js
          route.js
        route.js
      health/
        route.js
      me/
        account/
          route.js
        nutrition/
          [entryId]/
            route.js
          route.js
        nutrition-target/
          route.js
        password/
          route.js
        profile/
          route.js
        workout-plan/
          route.js
        workouts/
          [workoutId]/
            route.js
          route.js
    favicon.ico
    globals.css
    layout.js
    page.js
    page.module.css
  lib/
    validation/
      index.js
    auth.js
    businessRules.test.js
    calculations.js
    dates.js
    db.js
    errors.js
    permissions.js
    progression.js
    responses.js
    serializers.js
    workoutCycle.js
  models/
    ClientProfile.js
    NutritionEntry.js
    User.js
    WorkoutSession.js
  services/
    clientService.js
    nutritionService.js
    workoutService.js
.env.example
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
README.md
````

# Files

## File: public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: scripts/createTrainer.js
````javascript
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["trainer", "client"], required: true },
    trainerId: { type: mongoose.Schema.Types.ObjectId, default: null },
  },
  { timestamps: true },
);

async function main() {
  const name = process.env.TRAINER_SEED_NAME?.trim();
  const email = process.env.TRAINER_SEED_EMAIL?.trim().toLowerCase();
  const password = process.env.TRAINER_SEED_PASSWORD;
  if (!process.env.MONGODB_URI || !name || !email || !password) {
    throw new Error("MONGODB_URI and all TRAINER_SEED_* variables are required.");
  }
  if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
    throw new Error("Trainer password must be 8 characters or more and at most 72 UTF-8 bytes.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  const User = mongoose.models.User || mongoose.model("User", userSchema);
  if (await User.exists({ email })) throw new Error(`A user already exists for ${email}.`);
  await User.create({ name, email, passwordHash: await bcrypt.hash(password, 12), role: "trainer", trainerId: null });
  console.log(`Trainer created successfully for ${email}.`);
}

main()
  .catch((error) => {
    console.error(`Trainer creation failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
````

## File: scripts/setupLocalEnv.js
````javascript
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const backendDirectory = path.resolve(__dirname, "..");
const atlasFile = path.resolve(backendDirectory, "..", "atlas-credentials.env");
const targetFile = path.join(backendDirectory, ".env.local");

function parseEnvironment(contents) {
  return Object.fromEntries(
    contents
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const separator = line.indexOf("=");
        return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
      }),
  );
}

if (!fs.existsSync(atlasFile)) {
  console.error("Missing ../atlas-credentials.env. Add the MongoDB Atlas credential file first.");
  process.exit(1);
}

const atlasEnvironment = parseEnvironment(fs.readFileSync(atlasFile, "utf8"));
const existingEnvironment = fs.existsSync(targetFile)
  ? parseEnvironment(fs.readFileSync(targetFile, "utf8"))
  : {};

const mongodbUri = existingEnvironment.MONGODB_URI || atlasEnvironment.MONGODB_URI;
if (!mongodbUri) {
  console.error("MONGODB_URI is missing from atlas-credentials.env.");
  process.exit(1);
}

const values = {
  MONGODB_URI: mongodbUri,
  JWT_SECRET: existingEnvironment.JWT_SECRET || crypto.randomBytes(48).toString("hex"),
  FRONTEND_ORIGIN: existingEnvironment.FRONTEND_ORIGIN || "http://localhost:5173",
  TRAINER_SEED_NAME: existingEnvironment.TRAINER_SEED_NAME || "Demo Trainer",
  TRAINER_SEED_EMAIL: existingEnvironment.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local",
  TRAINER_SEED_PASSWORD: existingEnvironment.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026",
};

const serialized = `${Object.entries(values)
  .map(([key, value]) => `${key}=${value}`)
  .join("\n")}\n`;

fs.writeFileSync(targetFile, serialized, { mode: 0o600 });
console.log("Created backend/.env.local from the supplied Atlas credentials.");
console.log("Demo trainer: demo.trainer@fittrack.local (password documented in README). ");
````

## File: scripts/smokeApi.js
````javascript
const baseUrl = process.env.API_BASE_URL || "http://localhost:3000/api";

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const payload = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(`${path} returned ${response.status}: ${payload?.error?.message || "request failed"}`);
  return payload?.data;
}

async function login(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

async function main() {
  const health = await request("/health");
  if (health.status !== "ok") throw new Error("Health endpoint is not ready.");
  const trainer = await login("demo.trainer@fittrack.local", "FitTrackDemo!2026");
  const trainerHeaders = { Authorization: `Bearer ${trainer.token}` };
  const clients = await request("/clients", { headers: trainerHeaders });
  if (clients.length !== 2) throw new Error(`Expected 2 seeded clients, found ${clients.length}.`);
  await request(`/clients/${clients[0].id}/workout-plan`, { headers: trainerHeaders });

  const client = await login("alex.client@fittrack.local", "ClientDemo!2026");
  const clientHeaders = { Authorization: `Bearer ${client.token}` };
  const [plan, nutrition, history] = await Promise.all([
    request("/me/workout-plan", { headers: clientHeaders }),
    request("/me/nutrition", { headers: clientHeaders }),
    request("/me/workouts", { headers: clientHeaders }),
  ]);
  if (plan.plan.days.length !== 3 || nutrition.entries.length !== 3 || history.total !== 1) {
    throw new Error("Seeded client data did not match the expected demo fixture.");
  }
  console.log("FitTrack API smoke test passed.");
  console.log("Health, both roles, client ownership, plans, nutrition, and history are available.");
}

main().catch((error) => {
  console.error(`Smoke test failed: ${error.message}`);
  process.exitCode = 1;
});
````

## File: src/app/api/auth/login/route.js
````javascript
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
````

## File: src/app/api/auth/me/route.js
````javascript
import { authenticateRequest } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { serializeUser } from "@/lib/serializers";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => dataResponse(serializeUser(await authenticateRequest(request))));
}
````

## File: src/app/api/calculations/tdee/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { tdeeSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request) {
  return withErrorHandling(async () => {
    requireRole(await authenticateRequest(request), "trainer");
    const input = tdeeSchema.parse(await readJson(request));
    return dataResponse(calculateBmrAndTdee(input));
  });
}
````

## File: src/app/api/clients/[clientId]/nutrition/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { getDailyNutrition, requestedDate } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const { clientId } = await params;
    const client = await getOwnedClientOrThrow(trainer._id, clientId);
    return dataResponse(await getDailyNutrition(client._id, requestedDate(request)));
  });
}
````

## File: src/app/api/clients/[clientId]/nutrition-target/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { nutritionTargetSchema } from "@/lib/validation";
import { getNutritionTarget, updateNutritionTarget } from "@/services/clientService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return client._id;
}

export async function GET(request, context) {
  return withErrorHandling(async () => dataResponse(await getNutritionTarget(await authorize(request, context))));
}

export async function PUT(request, context) {
  return withErrorHandling(async () => {
    const clientId = await authorize(request, context);
    const input = nutritionTargetSchema.parse(await readJson(request));
    return dataResponse(await updateNutritionTarget(clientId, input));
  });
}
````

## File: src/app/api/clients/[clientId]/workout-plan/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { workoutPlanSchema } from "@/lib/validation";
import { getWorkoutPlanState, updateWorkoutPlan } from "@/services/clientService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return client._id;
}

export async function GET(request, context) {
  return withErrorHandling(async () => dataResponse(await getWorkoutPlanState(await authorize(request, context))));
}

export async function PUT(request, context) {
  return withErrorHandling(async () => {
    const clientId = await authorize(request, context);
    const input = workoutPlanSchema.parse(await readJson(request));
    return dataResponse(await updateWorkoutPlan(clientId, input));
  });
}
````

## File: src/app/api/clients/[clientId]/workouts/[workoutId]/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { getWorkout } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const { clientId, workoutId } = await params;
    const client = await getOwnedClientOrThrow(trainer._id, clientId);
    return dataResponse(await getWorkout(client._id, workoutId));
  });
}
````

## File: src/app/api/clients/[clientId]/workouts/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { getOwnedClientOrThrow } from "@/lib/permissions";
import { dataResponse } from "@/lib/responses";
import { paginationSchema, workoutSubmissionSchema } from "@/lib/validation";
import { createWorkout, listWorkouts } from "@/services/workoutService";

export const runtime = "nodejs";

async function authorize(request, context) {
  const trainer = requireRole(await authenticateRequest(request), "trainer");
  const { clientId } = await context.params;
  const client = await getOwnedClientOrThrow(trainer._id, clientId);
  return { trainer, client };
}

export async function GET(request, context) {
  return withErrorHandling(async () => {
    const { client } = await authorize(request, context);
    const query = paginationSchema.parse(Object.fromEntries(new URL(request.url).searchParams));
    return dataResponse(await listWorkouts(client._id, query));
  });
}

export async function POST(request, context) {
  return withErrorHandling(async () => {
    const { trainer, client } = await authorize(request, context);
    const input = workoutSubmissionSchema.parse(await readJson(request));
    return dataResponse(
      await createWorkout({ clientId: client._id, recordedByUserId: trainer._id, input }),
      { status: 201 },
    );
  });
}
````

## File: src/app/api/clients/[clientId]/route.js
````javascript
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
````

## File: src/app/api/clients/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { createClientSchema } from "@/lib/validation";
import { createClient, listClients } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    return dataResponse(await listClients(trainer._id));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const trainer = requireRole(await authenticateRequest(request), "trainer");
    const input = createClientSchema.parse(await readJson(request));
    return dataResponse(await createClient(trainer._id, input), { status: 201 });
  });
}
````

## File: src/app/api/health/route.js
````javascript
import { dataResponse } from "@/lib/responses";

export const runtime = "nodejs";

export function GET() {
  return dataResponse({ status: "ok" });
}
````

## File: src/app/api/me/account/route.js
````javascript
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
````

## File: src/app/api/me/nutrition/[entryId]/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse, emptyResponse } from "@/lib/responses";
import { nutritionEntrySchema } from "@/lib/validation";
import { deleteNutritionEntry, updateNutritionEntry } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function PATCH(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { entryId } = await params;
    const input = nutritionEntrySchema.parse(await readJson(request));
    return dataResponse(await updateNutritionEntry(client._id, entryId, input));
  });
}

export async function DELETE(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { entryId } = await params;
    await deleteNutritionEntry(client._id, entryId);
    return emptyResponse();
  });
}
````

## File: src/app/api/me/nutrition/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { nutritionEntrySchema } from "@/lib/validation";
import { createNutritionEntry, getDailyNutrition, requestedDate } from "@/services/nutritionService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getDailyNutrition(client._id, requestedDate(request)));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const input = nutritionEntrySchema.parse(await readJson(request));
    return dataResponse(await createNutritionEntry(client._id, input), { status: 201 });
  });
}
````

## File: src/app/api/me/nutrition-target/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getNutritionTarget } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getNutritionTarget(client._id));
  });
}
````

## File: src/app/api/me/password/route.js
````javascript
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
````

## File: src/app/api/me/profile/route.js
````javascript
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
````

## File: src/app/api/me/workout-plan/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getWorkoutPlanState } from "@/services/clientService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    return dataResponse(await getWorkoutPlanState(client._id));
  });
}
````

## File: src/app/api/me/workouts/[workoutId]/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { getWorkout } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const { workoutId } = await params;
    return dataResponse(await getWorkout(client._id, workoutId));
  });
}
````

## File: src/app/api/me/workouts/route.js
````javascript
import { authenticateRequest, requireRole } from "@/lib/auth";
import { readJson, withErrorHandling } from "@/lib/errors";
import { dataResponse } from "@/lib/responses";
import { paginationSchema, workoutSubmissionSchema } from "@/lib/validation";
import { createWorkout, listWorkouts } from "@/services/workoutService";

export const runtime = "nodejs";

export async function GET(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const query = paginationSchema.parse(Object.fromEntries(new URL(request.url).searchParams));
    return dataResponse(await listWorkouts(client._id, query));
  });
}

export async function POST(request) {
  return withErrorHandling(async () => {
    const client = requireRole(await authenticateRequest(request), "client");
    const input = workoutSubmissionSchema.parse(await readJson(request));
    return dataResponse(
      await createWorkout({ clientId: client._id, recordedByUserId: client._id, input }),
      { status: 201 },
    );
  });
}
````

## File: src/app/globals.css
````css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

html {
  height: 100%;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
````

## File: src/lib/validation/index.js
````javascript
import { z } from "zod";

const trimmed = (max, message = "This field is required.") =>
  z.string().trim().min(1, message).max(max);

export const objectIdSchema = z.string().regex(/^[a-f\d]{24}$/i, "Invalid identifier.");
export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format.").refine(
  (value) => {
    const [year, month, day] = value.split("-").map(Number);
    const parsed = new Date(Date.UTC(year, month - 1, day));
    return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
  },
  "Enter a real calendar date.",
);

export const emailSchema = z.string().trim().email("Enter a valid email address.").max(254).transform((value) => value.toLowerCase());
export const passwordSchema = z.string().min(8, "Password must be at least 8 characters.").refine(
  (value) => Buffer.byteLength(value, "utf8") <= 72,
  "Password must be at most 72 UTF-8 bytes.",
);

export const fitnessProfileSchema = z.object({
  age: z.coerce.number().int().min(1).max(120),
  heightCm: z.coerce.number().positive().max(300),
  weightKg: z.coerce.number().positive().max(500),
  biologicalSex: z.enum(["male", "female"]),
  activityLevel: z.enum(["sedentary", "light", "moderate", "very_active", "extra_active"]),
  goal: z.enum(["maintain", "lose", "gain"]),
}).strict();

export const tdeeSchema = fitnessProfileSchema.omit({ goal: true });

export const nutritionTargetSchema = z.object({
  calories: z.coerce.number().positive().max(20000),
  proteinGrams: z.coerce.number().positive().max(2000),
}).strict();

const exerciseSchema = z.object({
  _id: objectIdSchema.optional(),
  name: trimmed(120),
  targetSets: z.coerce.number().int().min(1).max(20).nullable(),
  targetReps: z.coerce.number().int().min(1).max(100).nullable(),
  suggestedWeightKg: z.coerce.number().min(0).max(1000).nullable(),
  notes: z.string().trim().max(500).default(""),
}).strict().superRefine((exercise, context) => {
  if ((exercise.targetSets == null) !== (exercise.targetReps == null)) {
    context.addIssue({ code: "custom", path: ["targetSets"], message: "Sets and reps must both be set or both be empty." });
  }
});

export const workoutPlanSchema = z.object({
  days: z.array(z.object({
    dayNumber: z.coerce.number().int().min(1).max(7),
    name: z.string().trim().max(100).default(""),
    exercises: z.array(exerciseSchema).min(1, "Each workout day needs at least one exercise."),
  }).strict()).min(1).max(7),
}).strict().superRefine((plan, context) => {
  plan.days.forEach((day, index) => {
    if (day.dayNumber !== index + 1) {
      context.addIssue({ code: "custom", path: ["days", index, "dayNumber"], message: "Workout days must be sequential from Day 1." });
    }
  });
});

export const loginSchema = z.object({ email: emailSchema, password: z.string().min(1) }).strict();

export const createClientSchema = z.object({
  account: z.object({ name: trimmed(100), email: emailSchema, password: passwordSchema }).strict(),
  fitnessProfile: fitnessProfileSchema,
  nutritionTarget: nutritionTargetSchema,
  workoutPlan: workoutPlanSchema,
}).strict();

export const updateClientSchema = z.object({
  name: trimmed(100),
  fitnessProfile: fitnessProfileSchema,
}).strict();

export const emailUpdateSchema = z.object({ email: emailSchema, currentPassword: z.string().min(1) }).strict();
export const passwordUpdateSchema = z.object({ currentPassword: z.string().min(1), newPassword: passwordSchema }).strict();

const actualSetSchema = z.object({
  reps: z.coerce.number().int().min(0).max(1000),
  weightKg: z.coerce.number().min(0).max(2000),
}).strict();

export const workoutSubmissionSchema = z.object({
  workoutDayNumber: z.coerce.number().int().min(1).max(7),
  completedDate: dateSchema,
  exercises: z.array(z.object({
    planExerciseId: objectIdSchema,
    sets: z.array(actualSetSchema).max(50),
    notes: z.string().trim().max(500).default(""),
  }).strict()).min(1),
}).strict();

export const nutritionEntrySchema = z.object({
  logDate: dateSchema,
  foodName: trimmed(150),
  calories: z.coerce.number().min(0).max(10000),
  proteinGrams: z.coerce.number().min(0).max(1000),
  notes: z.string().trim().max(500).default(""),
}).strict();

export const paginationSchema = z.object({
  exerciseId: objectIdSchema.optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  page: z.coerce.number().int().min(1).default(1),
});
````

## File: src/lib/auth.js
````javascript
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
````

## File: src/lib/calculations.js
````javascript
export const ACTIVITY_FACTORS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very_active: 1.725,
  extra_active: 1.9,
};

export function calculateBmrAndTdee({ age, heightCm, weightKg, biologicalSex, activityLevel }) {
  const sexAdjustment = biologicalSex === "male" ? 5 : -161;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexAdjustment;
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(bmr * ACTIVITY_FACTORS[activityLevel]),
  };
}
````

## File: src/lib/dates.js
````javascript
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
````

## File: src/lib/db.js
````javascript
import mongoose from "mongoose";

const globalCache = globalThis;
const cache = globalCache.__fittrackMongoose || { connection: null, promise: null };
globalCache.__fittrackMongoose = cache;

export async function connectDatabase() {
  if (cache.connection) return cache.connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured.");

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri, { bufferCommands: false }).then((instance) => instance);
  }

  try {
    cache.connection = await cache.promise;
  } catch (error) {
    cache.promise = null;
    throw error;
  }

  return cache.connection;
}
````

## File: src/lib/errors.js
````javascript
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
````

## File: src/lib/permissions.js
````javascript
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
````

## File: src/lib/progression.js
````javascript
export const PROGRESSION = {
  READY: "READY_TO_PROGRESS",
  MAINTAIN: "MAINTAIN",
  NOT_APPLICABLE: "NOT_APPLICABLE",
};

export function calculateProgression(target, actualSets) {
  const { targetSets, targetReps, suggestedWeightKg } = target;
  if (targetSets == null || targetReps == null || suggestedWeightKg == null) {
    return PROGRESSION.NOT_APPLICABLE;
  }
  if (actualSets.length < targetSets) return PROGRESSION.MAINTAIN;

  const targetReached = actualSets
    .slice(0, targetSets)
    .every((set) => set.reps >= targetReps && set.weightKg >= suggestedWeightKg);
  return targetReached ? PROGRESSION.READY : PROGRESSION.MAINTAIN;
}
````

## File: src/lib/responses.js
````javascript
export function dataResponse(data, init = {}) {
  return Response.json({ data }, init);
}

export function emptyResponse() {
  return new Response(null, { status: 204 });
}

export function optionsResponse() {
  return new Response(null, { status: 204 });
}
````

## File: src/lib/serializers.js
````javascript
export function serializeUser(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function plainDocument(document) {
  if (!document) return document;
  return typeof document.toObject === "function" ? document.toObject() : document;
}
````

## File: src/lib/workoutCycle.js
````javascript
export function calculateWorkoutCycle(plan, sessions) {
  const dayNumbers = plan.days.map((day) => day.dayNumber).sort((a, b) => a - b);
  const relevantSessions = sessions.filter((session) => session.planRevision === plan.revision);
  const highestCycle = relevantSessions.reduce(
    (highest, session) => Math.max(highest, session.cycleNumber),
    0,
  );

  let cycleNumber = highestCycle || 1;
  const highestCompleted = new Set(
    relevantSessions
      .filter((session) => session.cycleNumber === highestCycle)
      .map((session) => session.workoutDayNumber),
  );
  if (highestCycle && dayNumbers.every((number) => highestCompleted.has(number))) {
    cycleNumber = highestCycle + 1;
  }

  const completed = new Set(
    relevantSessions
      .filter((session) => session.cycleNumber === cycleNumber)
      .map((session) => session.workoutDayNumber),
  );
  const nextSuggestedDayNumber = dayNumbers.find((number) => !completed.has(number)) ?? null;

  return {
    cycleNumber,
    nextSuggestedDayNumber,
    completedCount: completed.size,
    totalDays: dayNumbers.length,
    days: dayNumbers.map((dayNumber) => ({
      dayNumber,
      status: completed.has(dayNumber)
        ? "COMPLETED"
        : dayNumber === nextSuggestedDayNumber
          ? "NEXT_SUGGESTED"
          : "NOT_COMPLETED",
    })),
  };
}
````

## File: src/models/ClientProfile.js
````javascript
import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  targetSets: { type: Number, default: null, min: 1, max: 20 },
  targetReps: { type: Number, default: null, min: 1, max: 100 },
  suggestedWeightKg: { type: Number, default: null, min: 0, max: 1000 },
  notes: { type: String, trim: true, maxlength: 500, default: "" },
});

const workoutDaySchema = new mongoose.Schema(
  {
    dayNumber: { type: Number, required: true, min: 1, max: 7 },
    name: { type: String, trim: true, maxlength: 100, default: "" },
    exercises: {
      type: [exerciseSchema],
      validate: [(value) => value.length >= 1, "Each day needs an exercise."],
    },
  },
  { _id: false },
);

const clientProfileSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    fitnessProfile: {
      age: { type: Number, required: true, min: 1, max: 120 },
      heightCm: { type: Number, required: true, min: Number.MIN_VALUE, max: 300 },
      weightKg: { type: Number, required: true, min: Number.MIN_VALUE, max: 500 },
      biologicalSex: { type: String, required: true, enum: ["male", "female"] },
      activityLevel: { type: String, required: true, enum: ["sedentary", "light", "moderate", "very_active", "extra_active"] },
      goal: { type: String, required: true, enum: ["maintain", "lose", "gain"] },
    },
    nutritionTarget: {
      calories: { type: Number, required: true, min: Number.MIN_VALUE },
      proteinGrams: { type: Number, required: true, min: Number.MIN_VALUE },
    },
    workoutPlan: {
      revision: { type: Number, required: true, min: 1, default: 1 },
      days: {
        type: [workoutDaySchema],
        validate: [(value) => value.length >= 1 && value.length <= 7, "Plan must have 1 to 7 days."],
      },
    },
  },
  { timestamps: true },
);

export default mongoose.models.ClientProfile || mongoose.model("ClientProfile", clientProfileSchema);
````

## File: src/models/NutritionEntry.js
````javascript
import mongoose from "mongoose";

const nutritionEntrySchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    logDate: { type: String, required: true },
    foodName: { type: String, required: true, trim: true, maxlength: 150 },
    calories: { type: Number, required: true, min: 0, max: 10000 },
    proteinGrams: { type: Number, required: true, min: 0, max: 1000 },
    notes: { type: String, trim: true, maxlength: 500, default: "" },
  },
  { timestamps: true },
);

nutritionEntrySchema.index({ clientId: 1, logDate: 1 });
nutritionEntrySchema.index({ clientId: 1, createdAt: -1 });

export default mongoose.models.NutritionEntry || mongoose.model("NutritionEntry", nutritionEntrySchema);
````

## File: src/models/User.js
````javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true, maxlength: 254 },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, required: true, enum: ["trainer", "client"] },
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required() { return this.role === "client"; },
      index: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
````

## File: src/models/WorkoutSession.js
````javascript
import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
  {
    setNumber: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 0 },
    weightKg: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const completedExerciseSchema = new mongoose.Schema(
  {
    planExerciseId: { type: mongoose.Schema.Types.ObjectId, required: true },
    exerciseName: { type: String, required: true },
    targetSnapshot: {
      sets: { type: Number, default: null },
      reps: { type: Number, default: null },
      suggestedWeightKg: { type: Number, default: null },
      notes: { type: String, default: "" },
    },
    sets: { type: [setSchema], default: [] },
    notes: { type: String, maxlength: 500, default: "" },
    progressionStatus: { type: String, required: true, enum: ["READY_TO_PROGRESS", "MAINTAIN", "NOT_APPLICABLE"] },
  },
  { _id: false },
);

const workoutSessionSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recordedByUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    completedDate: { type: String, required: true },
    workoutDayNumber: { type: Number, required: true },
    workoutDayName: { type: String, default: "" },
    planRevision: { type: Number, required: true },
    cycleNumber: { type: Number, required: true },
    exercises: { type: [completedExerciseSchema], required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

workoutSessionSchema.index({ clientId: 1, createdAt: -1 });
workoutSessionSchema.index({ clientId: 1, planRevision: 1, cycleNumber: 1 });
workoutSessionSchema.index({ clientId: 1, completedDate: 1 });
workoutSessionSchema.index(
  { clientId: 1, planRevision: 1, cycleNumber: 1, workoutDayNumber: 1 },
  { unique: true },
);

export default mongoose.models.WorkoutSession || mongoose.model("WorkoutSession", workoutSessionSchema);
````

## File: src/services/workoutService.js
````javascript
import mongoose from "mongoose";
import { assertNotFuture } from "@/lib/dates";
import { ApiError } from "@/lib/errors";
import { calculateProgression } from "@/lib/progression";
import { calculateWorkoutCycle } from "@/lib/workoutCycle";
import ClientProfile from "@/models/ClientProfile";
import WorkoutSession from "@/models/WorkoutSession";

export async function createWorkout({ clientId, recordedByUserId, input }) {
  assertNotFuture(input.completedDate, "Workout date");
  const profile = await ClientProfile.findOne({ clientId });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");

  const plan = profile.workoutPlan;
  const plainPlan = profile.toObject().workoutPlan;
  const workoutDay = plan.days.find((day) => day.dayNumber === input.workoutDayNumber);
  if (!workoutDay) throw new ApiError(404, "WORKOUT_DAY_NOT_FOUND", "Workout day not found.");

  const priorSessions = await WorkoutSession.find({ clientId, planRevision: plan.revision }).lean();
  const cycle = calculateWorkoutCycle(plainPlan, priorSessions);
  const dayStatus = cycle.days.find((day) => day.dayNumber === input.workoutDayNumber)?.status;
  if (dayStatus === "COMPLETED") {
    throw new ApiError(409, "WORKOUT_DAY_ALREADY_COMPLETED", "This workout day is already complete in the current cycle.");
  }

  const submittedById = new Map(input.exercises.map((exercise) => [exercise.planExerciseId, exercise]));
  if (submittedById.size !== workoutDay.exercises.length) {
    throw new ApiError(400, "VALIDATION_ERROR", "Submit a result for every prescribed exercise.");
  }

  const exercises = workoutDay.exercises.map((planned) => {
    const submitted = submittedById.get(planned._id.toString());
    if (!submitted) throw new ApiError(400, "VALIDATION_ERROR", `Missing result for ${planned.name}.`);
    const sets = submitted.sets.map((set, index) => ({ ...set, setNumber: index + 1 }));
    return {
      planExerciseId: planned._id,
      exerciseName: planned.name,
      targetSnapshot: {
        sets: planned.targetSets,
        reps: planned.targetReps,
        suggestedWeightKg: planned.suggestedWeightKg,
        notes: planned.notes,
      },
      sets,
      notes: submitted.notes,
      progressionStatus: calculateProgression(planned, sets),
    };
  });

  let session;
  try {
    session = await WorkoutSession.create({
      clientId,
      recordedByUserId,
      completedDate: input.completedDate,
      workoutDayNumber: workoutDay.dayNumber,
      workoutDayName: workoutDay.name,
      planRevision: plan.revision,
      cycleNumber: cycle.cycleNumber,
      exercises,
    });
  } catch (error) {
    if (error?.code === 11000) {
      throw new ApiError(409, "WORKOUT_DAY_ALREADY_COMPLETED", "This workout day is already complete in the current cycle.");
    }
    throw error;
  }

  const saved = session.toObject();
  return {
    session: saved,
    cycle: calculateWorkoutCycle(plainPlan, [...priorSessions, saved]),
  };
}

export async function listWorkouts(clientId, query) {
  const filter = { clientId };
  if (query.exerciseId) filter["exercises.planExerciseId"] = new mongoose.Types.ObjectId(query.exerciseId);
  const [items, total] = await Promise.all([
    WorkoutSession.find(filter)
      .populate("recordedByUserId", "name role")
      .sort({ completedDate: -1, createdAt: -1 })
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .lean(),
    WorkoutSession.countDocuments(filter),
  ]);
  return { items, page: query.page, limit: query.limit, total, pages: Math.ceil(total / query.limit) };
}

export async function getWorkout(clientId, workoutId) {
  if (!mongoose.isValidObjectId(workoutId)) {
    throw new ApiError(404, "WORKOUT_NOT_FOUND", "Workout not found.");
  }
  const workout = await WorkoutSession.findOne({ _id: workoutId, clientId })
    .populate("recordedByUserId", "name role")
    .lean();
  if (!workout) throw new ApiError(404, "WORKOUT_NOT_FOUND", "Workout not found.");
  return workout;
}
````

## File: .env.example
````
MONGODB_URI=
JWT_SECRET=
FRONTEND_ORIGIN=http://localhost:5173

TRAINER_SEED_NAME=Demo Trainer
TRAINER_SEED_EMAIL=demo.trainer@fittrack.local
TRAINER_SEED_PASSWORD=
````

## File: AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
````

## File: CLAUDE.md
````markdown
@AGENTS.md
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: jsconfig.json
````json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

## File: scripts/seedDemo.js
````javascript
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

const userSchema = new mongoose.Schema({
  name: String, email: { type: String, unique: true }, passwordHash: String, role: String, trainerId: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });
const exerciseSchema = new mongoose.Schema({ name: String, targetSets: Number, targetReps: Number, suggestedWeightKg: Number, notes: String });
const profileSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, unique: true },
  fitnessProfile: mongoose.Schema.Types.Mixed,
  nutritionTarget: mongoose.Schema.Types.Mixed,
  workoutPlan: { revision: Number, days: [{ dayNumber: Number, name: String, exercises: [exerciseSchema] }] },
}, { timestamps: true });
const workoutSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId, recordedByUserId: mongoose.Schema.Types.ObjectId,
  completedDate: String, workoutDayNumber: Number, workoutDayName: String,
  planRevision: Number, cycleNumber: Number, exercises: [mongoose.Schema.Types.Mixed],
}, { timestamps: { createdAt: true, updatedAt: false } });
const nutritionSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId, logDate: String, foodName: String,
  calories: Number, proteinGrams: Number, notes: String,
}, { timestamps: true });

const demoClients = [
  {
    name: "Alex Morgan", email: "alex.client@fittrack.local",
    fitnessProfile: { age: 29, heightCm: 175, weightKg: 74, biologicalSex: "male", activityLevel: "moderate", goal: "gain" },
    nutritionTarget: { calories: 2700, proteinGrams: 160 },
    days: [
      { name: "Push Strength", exercises: [["Incline Bench Press", 3, 10, 55, "Keep shoulder blades retracted."], ["Cable Fly", 3, 12, 15, "Control the stretch."]] },
      { name: "Lower Body", exercises: [["Back Squat", 4, 8, 80, "Brace before each rep."], ["Romanian Deadlift", 3, 10, 60, "Keep the bar close."]] },
      { name: "Pull & Core", exercises: [["Lat Pulldown", 3, 12, 50, "Lead with the elbows."], ["Plank", null, null, null, "Three controlled holds."]] },
    ],
  },
  {
    name: "Jamie Lee", email: "jamie.client@fittrack.local",
    fitnessProfile: { age: 34, heightCm: 164, weightKg: 62, biologicalSex: "female", activityLevel: "light", goal: "maintain" },
    nutritionTarget: { calories: 1950, proteinGrams: 120 },
    days: [
      { name: "Full Body A", exercises: [["Goblet Squat", 3, 12, 18, "Smooth tempo."], ["Dumbbell Row", 3, 10, 14, "Pause at the top."]] },
      { name: "Full Body B", exercises: [["Hip Thrust", 3, 10, 50, "Full lockout."], ["Dumbbell Shoulder Press", 3, 10, 10, "Avoid arching."]] },
    ],
  },
];

async function main() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required. Run npm run setup:local first.");
  await mongoose.connect(process.env.MONGODB_URI);
  const User = mongoose.models.User || mongoose.model("User", userSchema);
  const ClientProfile = mongoose.models.ClientProfile || mongoose.model("ClientProfile", profileSchema);
  const WorkoutSession = mongoose.models.WorkoutSession || mongoose.model("WorkoutSession", workoutSchema);
  const NutritionEntry = mongoose.models.NutritionEntry || mongoose.model("NutritionEntry", nutritionSchema);

  const trainerEmail = (process.env.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local").toLowerCase();
  const trainerPassword = process.env.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026";
  const trainer = await User.findOneAndUpdate(
    { email: trainerEmail },
    { $set: { name: process.env.TRAINER_SEED_NAME || "Demo Trainer", passwordHash: await bcrypt.hash(trainerPassword, 12), role: "trainer", trainerId: null } },
    { returnDocument: "after", upsert: true, setDefaultsOnInsert: true },
  );

  const clientPasswordHash = await bcrypt.hash("ClientDemo!2026", 12);
  for (const seed of demoClients) {
    const oldClient = await User.findOne({ email: seed.email });
    if (oldClient) {
      await Promise.all([
        ClientProfile.deleteMany({ clientId: oldClient._id }),
        WorkoutSession.deleteMany({ clientId: oldClient._id }),
        NutritionEntry.deleteMany({ clientId: oldClient._id }),
      ]);
      await User.deleteOne({ _id: oldClient._id });
    }

    const client = await User.create({
      name: seed.name, email: seed.email, passwordHash: clientPasswordHash, role: "client", trainerId: trainer._id,
    });
    const profile = await ClientProfile.create({
      clientId: client._id, fitnessProfile: seed.fitnessProfile, nutritionTarget: seed.nutritionTarget,
      workoutPlan: {
        revision: 1,
        days: seed.days.map((day, dayIndex) => ({
          dayNumber: dayIndex + 1, name: day.name,
          exercises: day.exercises.map(([name, targetSets, targetReps, suggestedWeightKg, notes]) => ({ name, targetSets, targetReps, suggestedWeightKg, notes })),
        })),
      },
    });

    const firstDay = profile.workoutPlan.days[0];
    await WorkoutSession.create({
      clientId: client._id, recordedByUserId: client._id, completedDate: dateOffset(-2),
      workoutDayNumber: 1, workoutDayName: firstDay.name, planRevision: 1, cycleNumber: 1,
      exercises: firstDay.exercises.map((exercise) => ({
        planExerciseId: exercise._id, exerciseName: exercise.name,
        targetSnapshot: { sets: exercise.targetSets, reps: exercise.targetReps, suggestedWeightKg: exercise.suggestedWeightKg, notes: exercise.notes },
        sets: exercise.targetSets ? Array.from({ length: exercise.targetSets }, (_, index) => ({ setNumber: index + 1, reps: exercise.targetReps, weightKg: exercise.suggestedWeightKg })) : [],
        notes: "Seeded demo workout",
        progressionStatus: exercise.targetSets && exercise.suggestedWeightKg != null ? "READY_TO_PROGRESS" : "NOT_APPLICABLE",
      })),
    });

    await NutritionEntry.insertMany([
      { clientId: client._id, logDate: dateOffset(0), foodName: "Greek yogurt and berries", calories: 310, proteinGrams: 25, notes: "Breakfast" },
      { clientId: client._id, logDate: dateOffset(0), foodName: "Chicken rice bowl", calories: 680, proteinGrams: 48, notes: "Lunch" },
      { clientId: client._id, logDate: dateOffset(0), foodName: "Protein shake", calories: 220, proteinGrams: 30, notes: "Post-workout" },
    ]);
  }

  console.log("Demo data seeded successfully.");
  console.log(`Trainer login: ${trainerEmail}`);
  console.log("Client logins: alex.client@fittrack.local, jamie.client@fittrack.local");
}

main()
  .catch((error) => {
    console.error(`Demo seed failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
````

## File: src/app/page.js
````javascript
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>FITTRACK COACH</p>
        <h1>Backend API</h1>
        <p>The service is running. Use <code>/api/health</code> for health checks.</p>
      </main>
    </div>
  );
}
````

## File: src/app/page.module.css
````css
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: #171717;
  color: #fff;
}

.main {
  width: min(640px, 100%);
  border-left: 8px solid #e52b35;
  padding: 2rem;
  background: #242424;
}

.main h1 {
  margin: 0.25rem 0 1rem;
  font-size: clamp(2.4rem, 8vw, 5rem);
  text-transform: uppercase;
}

.eyebrow {
  color: #ff6670;
  font-weight: 800;
  letter-spacing: 0.14em;
}
````

## File: src/lib/businessRules.test.js
````javascript
import { describe, expect, it } from "vitest";
import { calculateBmrAndTdee } from "./calculations";
import { calculateProgression, PROGRESSION } from "./progression";
import { calculateWorkoutCycle } from "./workoutCycle";

const plan = { revision: 2, days: [{ dayNumber: 1 }, { dayNumber: 2 }, { dayNumber: 3 }] };

describe("BMR and TDEE", () => {
  it("uses Mifflin-St Jeor and the selected activity factor", () => {
    expect(calculateBmrAndTdee({ age: 25, heightCm: 180, weightKg: 80, biologicalSex: "male", activityLevel: "moderate" }))
      .toEqual({ bmr: 1805, tdee: 2798 });
  });
});

describe("workout cycle", () => {
  it("suggests the first incomplete configured day", () => {
    const cycle = calculateWorkoutCycle(plan, [
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 1 },
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 3 },
    ]);
    expect(cycle.cycleNumber).toBe(1);
    expect(cycle.nextSuggestedDayNumber).toBe(2);
  });

  it("opens the next cycle after every day is complete", () => {
    const sessions = [1, 2, 3].map((day) => ({ planRevision: 2, cycleNumber: 1, workoutDayNumber: day }));
    expect(calculateWorkoutCycle(plan, sessions)).toMatchObject({ cycleNumber: 2, nextSuggestedDayNumber: 1 });
  });

  it("works for every supported plan length", () => {
    for (let length = 1; length <= 7; length += 1) {
      const dynamicPlan = { revision: 1, days: Array.from({ length }, (_, index) => ({ dayNumber: index + 1 })) };
      expect(calculateWorkoutCycle(dynamicPlan, []).days).toHaveLength(length);
      expect(calculateWorkoutCycle(dynamicPlan, []).nextSuggestedDayNumber).toBe(1);
    }
  });
});

describe("progression", () => {
  it("marks complete target sets at prescribed weight ready", () => {
    const target = { targetSets: 3, targetReps: 10, suggestedWeightKg: 20 };
    const sets = [10, 11, 10].map((reps) => ({ reps, weightKg: 20 }));
    expect(calculateProgression(target, sets)).toBe(PROGRESSION.READY);
  });

  it("marks missed targets maintain and unmeasured work not applicable", () => {
    expect(calculateProgression({ targetSets: 3, targetReps: 10, suggestedWeightKg: 20 }, [{ reps: 9, weightKg: 20 }]))
      .toBe(PROGRESSION.MAINTAIN);
    expect(calculateProgression({ targetSets: null, targetReps: null, suggestedWeightKg: null }, []))
      .toBe(PROGRESSION.NOT_APPLICABLE);
  });
});
````

## File: src/services/clientService.js
````javascript
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { ApiError } from "@/lib/errors";
import { calculateWorkoutCycle } from "@/lib/workoutCycle";
import ClientProfile from "@/models/ClientProfile";
import NutritionEntry from "@/models/NutritionEntry";
import User from "@/models/User";
import WorkoutSession from "@/models/WorkoutSession";

export async function createClient(trainerId, input) {
  if (await User.exists({ email: input.account.email })) {
    throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "That email is already in use.");
  }

  const client = await User.create({
    name: input.account.name,
    email: input.account.email,
    passwordHash: await bcrypt.hash(input.account.password, 12),
    role: "client",
    trainerId,
  });

  try {
    const profile = await ClientProfile.create({
      clientId: client._id,
      fitnessProfile: input.fitnessProfile,
      nutritionTarget: input.nutritionTarget,
      workoutPlan: { revision: 1, days: input.workoutPlan.days },
    });
    return clientDetail(client, profile);
  } catch (error) {
    await User.deleteOne({ _id: client._id });
    throw error;
  }
}

export async function listClients(trainerId) {
  const clients = await User.find({ role: "client", trainerId }).sort({ name: 1 }).lean();
  const ids = clients.map((client) => client._id);
  const [profiles, latestWorkouts] = await Promise.all([
    ClientProfile.find({ clientId: { $in: ids } }).lean(),
    WorkoutSession.aggregate([
      { $match: { clientId: { $in: ids } } },
      { $sort: { completedDate: -1, createdAt: -1 } },
      { $group: { _id: "$clientId", latestWorkoutDate: { $first: "$completedDate" } } },
    ]),
  ]);
  const profileMap = new Map(profiles.map((profile) => [profile.clientId.toString(), profile]));
  const workoutMap = new Map(latestWorkouts.map((item) => [item._id.toString(), item.latestWorkoutDate]));

  return clients.map((client) => ({
    id: client._id.toString(),
    name: client.name,
    email: client.email,
    fitnessGoal: profileMap.get(client._id.toString())?.fitnessProfile?.goal || null,
    latestWorkoutDate: workoutMap.get(client._id.toString()) || null,
  }));
}

export function clientDetail(client, profile) {
  const plainProfile = typeof profile.toObject === "function" ? profile.toObject() : profile;
  return {
    client: { id: client._id.toString(), name: client.name, email: client.email },
    fitnessProfile: plainProfile.fitnessProfile,
    estimates: calculateBmrAndTdee(plainProfile.fitnessProfile),
    nutritionTarget: plainProfile.nutritionTarget,
  };
}

export async function getClientDetail(client) {
  const profile = await ClientProfile.findOne({ clientId: client._id });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return clientDetail(client, profile);
}

export async function updateClient(client, input) {
  const profile = await ClientProfile.findOne({ clientId: client._id });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  client.name = input.name;
  profile.fitnessProfile = input.fitnessProfile;
  await Promise.all([client.save(), profile.save()]);
  return clientDetail(client, profile);
}

export async function deleteClient(clientId) {
  await Promise.all([
    NutritionEntry.deleteMany({ clientId }),
    WorkoutSession.deleteMany({ clientId }),
    ClientProfile.deleteOne({ clientId }),
  ]);
  await User.deleteOne({ _id: clientId });
}

export async function getWorkoutPlanState(clientId) {
  const profile = await ClientProfile.findOne({ clientId }).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  const sessions = await WorkoutSession.find({ clientId, planRevision: profile.workoutPlan.revision }).lean();
  const cycle = calculateWorkoutCycle(profile.workoutPlan, sessions);

  const latestProgression = {};
  [...sessions]
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((session) => {
      session.exercises.forEach((exercise) => {
        const id = exercise.planExerciseId.toString();
        if (!latestProgression[id]) latestProgression[id] = exercise.progressionStatus;
      });
    });

  return { plan: profile.workoutPlan, cycle, latestProgression };
}

export async function updateWorkoutPlan(clientId, input) {
  const profile = await ClientProfile.findOne({ clientId });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");

  const knownIds = new Set(
    profile.workoutPlan.days.flatMap((day) => day.exercises.map((exercise) => exercise._id.toString())),
  );
  for (const day of input.days) {
    for (const exercise of day.exercises) {
      if (exercise._id && !knownIds.has(exercise._id)) {
        throw new ApiError(400, "INVALID_PLAN", "An exercise identifier does not belong to this plan.");
      }
    }
  }

  profile.workoutPlan = {
    revision: profile.workoutPlan.revision + 1,
    days: input.days.map((day) => ({
      ...day,
      exercises: day.exercises.map((exercise) => ({
        ...exercise,
        _id: exercise._id || new mongoose.Types.ObjectId(),
      })),
    })),
  };
  await profile.save();
  return getWorkoutPlanState(clientId);
}

export async function getNutritionTarget(clientId) {
  const profile = await ClientProfile.findOne({ clientId }).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return profile.nutritionTarget;
}

export async function updateNutritionTarget(clientId, target) {
  const profile = await ClientProfile.findOneAndUpdate(
    { clientId },
    { $set: { nutritionTarget: target } },
    { returnDocument: "after", runValidators: true },
  ).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return profile.nutritionTarget;
}
````

## File: src/services/nutritionService.js
````javascript
import mongoose from "mongoose";
import { assertNotFuture, todayDateString } from "@/lib/dates";
import { ApiError } from "@/lib/errors";
import { dateSchema } from "@/lib/validation";
import ClientProfile from "@/models/ClientProfile";
import NutritionEntry from "@/models/NutritionEntry";

export function requestedDate(request) {
  const value = new URL(request.url).searchParams.get("date") || todayDateString();
  const date = dateSchema.parse(value);
  assertNotFuture(date, "Nutrition date");
  return date;
}

export async function getDailyNutrition(clientId, date) {
  const [profile, entries] = await Promise.all([
    ClientProfile.findOne({ clientId }).lean(),
    NutritionEntry.find({ clientId, logDate: date }).sort({ createdAt: -1 }).lean(),
  ]);
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  const totals = entries.reduce(
    (sum, entry) => ({
      calories: sum.calories + entry.calories,
      proteinGrams: sum.proteinGrams + entry.proteinGrams,
    }),
    { calories: 0, proteinGrams: 0 },
  );
  const target = profile.nutritionTarget;
  return {
    date,
    entries,
    totals,
    target,
    remaining: {
      calories: target.calories - totals.calories,
      proteinGrams: target.proteinGrams - totals.proteinGrams,
    },
  };
}

export async function createNutritionEntry(clientId, input) {
  assertNotFuture(input.logDate, "Nutrition date");
  return NutritionEntry.create({ ...input, clientId });
}

export async function updateNutritionEntry(clientId, entryId, input) {
  assertNotFuture(input.logDate, "Nutrition date");
  if (!mongoose.isValidObjectId(entryId)) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
  const entry = await NutritionEntry.findOneAndUpdate(
    { _id: entryId, clientId },
    { $set: input },
    { returnDocument: "after", runValidators: true },
  );
  if (!entry) throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  return entry;
}

export async function deleteNutritionEntry(clientId, entryId) {
  if (!mongoose.isValidObjectId(entryId)) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
  const result = await NutritionEntry.deleteOne({ _id: entryId, clientId });
  if (!result.deletedCount) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*
!.env.example

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: next.config.mjs
````javascript
/** @type {import('next').NextConfig} */
const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: allowedOrigin },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,PATCH,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
````

## File: src/app/layout.js
````javascript
import "./globals.css";

export const metadata = {
  title: "FitTrack Coach API",
  description: "API service for FitTrack Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
````

## File: package.json
````json
{
  "name": "backend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest run",
    "smoke": "node scripts/smokeApi.js",
    "setup:local": "node scripts/setupLocalEnv.js",
    "create-trainer": "node scripts/createTrainer.js",
    "seed": "node scripts/seedDemo.js"
  },
  "dependencies": {
    "@next/env": "^16.3.5",
    "bcrypt": "^6.0.0",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.10.1",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "vitest": "^5.0.1"
  }
}
````

## File: README.md
````markdown
# FitTrack Coach API

Next.js App Router API for authentication, trainer/client management, workout
planning and immutable workout history, nutrition tracking, and account changes.

## Local setup

Requirements: Node.js 22 LTS and access to the supplied MongoDB Atlas cluster.

```bash
npm install
npm run setup:local
npm run seed
npm run dev
```

The API runs at `http://localhost:3000`; health is available at
`http://localhost:3000/api/health`. `setup:local` reads
`../atlas-credentials.env`, writes an ignored `.env.local`, and preserves an
existing local JWT secret when rerun.

## Demo accounts

After `npm run seed`:

| Role | Email | Password |
|---|---|---|
| Trainer | `demo.trainer@fittrack.local` | `FitTrackDemo!2026` |
| Client | `alex.client@fittrack.local` | `ClientDemo!2026` |
| Client | `jamie.client@fittrack.local` | `ClientDemo!2026` |

The seed is repeatable. It refreshes only these named demo accounts and their
associated data.

## Checks

```bash
npm test
npm run lint
npm run build
```

With the development server running and demo data seeded, `npm run smoke`
checks both roles and the main read flows against the live API.

Completed workout sessions intentionally have no update or delete route.
````
`````

## File: scripts/smokeApi.js
`````javascript
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000/api";

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const payload = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(`${path} returned ${response.status}: ${payload?.error?.message || "request failed"}`);
  return payload?.data;
}

async function login(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

async function main() {
  const health = await request("/health");
  if (health.status !== "ok") throw new Error("Health endpoint is not ready.");
  const trainer = await login(
    process.env.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local",
    process.env.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026",
  );
  const trainerHeaders = { Authorization: `Bearer ${trainer.token}` };
  const clients = await request("/clients", { headers: trainerHeaders });
  if (clients.length !== 2) throw new Error(`Expected 2 seeded clients, found ${clients.length}.`);
  await request(`/clients/${clients[0].id}/workout-plan`, { headers: trainerHeaders });

  const client = await login("alex.client@fittrack.local", "ClientDemo!2026");
  const clientHeaders = { Authorization: `Bearer ${client.token}` };
  const [plan, nutrition, history] = await Promise.all([
    request("/me/workout-plan", { headers: clientHeaders }),
    request("/me/nutrition", { headers: clientHeaders }),
    request("/me/workouts", { headers: clientHeaders }),
  ]);
  if (plan.plan.days.length !== 3 || nutrition.entries.length !== 3 || history.total !== 1) {
    throw new Error("Seeded client data did not match the expected demo fixture.");
  }
  console.log("FitTrack API smoke test passed.");
  console.log("Health, both roles, client ownership, plans, nutrition, and history are available.");
}

main().catch((error) => {
  console.error(`Smoke test failed: ${error.message}`);
  process.exitCode = 1;
});
`````

## File: src/app/page.js
`````javascript
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>FITTRACK COACH</p>
        <h1>Backend API</h1>
        <p>The service is running. Use <code>/api/health</code> for health checks.</p>
      </main>
    </div>
  );
}
`````

## File: src/app/page.module.css
`````css
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: #171717;
  color: #fff;
}

.main {
  width: min(640px, 100%);
  border-left: 8px solid #e52b35;
  padding: 2rem;
  background: #242424;
}

.main h1 {
  margin: 0.25rem 0 1rem;
  font-size: clamp(2.4rem, 8vw, 5rem);
  text-transform: uppercase;
}

.eyebrow {
  color: #ff6670;
  font-weight: 800;
  letter-spacing: 0.14em;
}
`````

## File: src/lib/db.js
`````javascript
import mongoose from "mongoose";

const globalCache = globalThis;
const cache = globalCache.__fittrackMongoose || { connection: null, promise: null, indexMigrationPromise: null };
globalCache.__fittrackMongoose = cache;

async function removeLegacyWorkoutDayUniqueIndex() {
  if (!cache.indexMigrationPromise) {
    cache.indexMigrationPromise = (async () => {
      let indexes;
      try {
        indexes = await mongoose.connection.collection("workoutsessions").indexes();
      } catch (error) {
        if (error?.code === 26) return;
        throw error;
      }

      const legacyIndex = indexes.find((index) => {
        const fields = Object.keys(index.key || {});
        return index.unique
          && fields.join(",") === "clientId,planRevision,cycleNumber,workoutDayNumber";
      });
      if (legacyIndex) {
        await mongoose.connection.collection("workoutsessions").dropIndex(legacyIndex.name);
        console.log("Removed legacy one-workout-day-per-cycle database restriction.");
      }
    })().catch((error) => {
      cache.indexMigrationPromise = null;
      throw error;
    });
  }
  await cache.indexMigrationPromise;
}

export async function connectDatabase() {
  if (cache.connection) {
    await removeLegacyWorkoutDayUniqueIndex();
    return cache.connection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured.");

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri, { bufferCommands: false }).then((instance) => instance);
  }

  try {
    cache.connection = await cache.promise;
    await removeLegacyWorkoutDayUniqueIndex();
  } catch (error) {
    cache.promise = null;
    throw error;
  }

  return cache.connection;
}
`````

## File: src/models/WorkoutSession.js
`````javascript
import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
  {
    setNumber: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 0 },
    weightKg: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const completedExerciseSchema = new mongoose.Schema(
  {
    planExerciseId: { type: mongoose.Schema.Types.ObjectId, required: true },
    exerciseName: { type: String, required: true },
    targetSnapshot: {
      sets: { type: Number, default: null },
      reps: { type: Number, default: null },
      suggestedWeightKg: { type: Number, default: null },
      notes: { type: String, default: "" },
    },
    sets: { type: [setSchema], default: [] },
    notes: { type: String, maxlength: 500, default: "" },
    progressionStatus: { type: String, required: true, enum: ["READY_TO_PROGRESS", "MAINTAIN", "NOT_APPLICABLE"] },
  },
  { _id: false },
);

const workoutSessionSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recordedByUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    completedDate: { type: String, required: true },
    workoutDayNumber: { type: Number, required: true },
    workoutDayName: { type: String, default: "" },
    planRevision: { type: Number, required: true },
    cycleNumber: { type: Number, required: true },
    exercises: { type: [completedExerciseSchema], required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

workoutSessionSchema.index({ clientId: 1, createdAt: -1 });
workoutSessionSchema.index({ clientId: 1, planRevision: 1, cycleNumber: 1 });
workoutSessionSchema.index({ clientId: 1, completedDate: 1 });

export default mongoose.models.WorkoutSession || mongoose.model("WorkoutSession", workoutSessionSchema);
`````

## File: src/services/nutritionService.js
`````javascript
import mongoose from "mongoose";
import { assertNotFuture, todayDateString } from "@/lib/dates";
import { ApiError } from "@/lib/errors";
import { dateSchema } from "@/lib/validation";
import ClientProfile from "@/models/ClientProfile";
import NutritionEntry from "@/models/NutritionEntry";

export function requestedDate(request) {
  const value = new URL(request.url).searchParams.get("date") || todayDateString();
  const date = dateSchema.parse(value);
  assertNotFuture(date, "Nutrition date");
  return date;
}

export async function getDailyNutrition(clientId, date) {
  const [profile, entries] = await Promise.all([
    ClientProfile.findOne({ clientId }).lean(),
    NutritionEntry.find({ clientId, logDate: date }).sort({ createdAt: -1 }).lean(),
  ]);
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  const totals = entries.reduce(
    (sum, entry) => ({
      calories: sum.calories + entry.calories,
      proteinGrams: sum.proteinGrams + entry.proteinGrams,
    }),
    { calories: 0, proteinGrams: 0 },
  );
  const target = profile.nutritionTarget;
  return {
    date,
    entries,
    totals,
    target,
    remaining: {
      calories: target.calories - totals.calories,
      proteinGrams: target.proteinGrams - totals.proteinGrams,
    },
  };
}

export async function createNutritionEntry(clientId, input) {
  assertNotFuture(input.logDate, "Nutrition date");
  return NutritionEntry.create({ ...input, clientId });
}

export async function updateNutritionEntry(clientId, entryId, input) {
  assertNotFuture(input.logDate, "Nutrition date");
  if (!mongoose.isValidObjectId(entryId)) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
  const entry = await NutritionEntry.findOneAndUpdate(
    { _id: entryId, clientId },
    { $set: input },
    { returnDocument: "after", runValidators: true },
  );
  if (!entry) throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  return entry;
}

export async function deleteNutritionEntry(clientId, entryId) {
  if (!mongoose.isValidObjectId(entryId)) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
  const result = await NutritionEntry.deleteOne({ _id: entryId, clientId });
  if (!result.deletedCount) {
    throw new ApiError(404, "NUTRITION_ENTRY_NOT_FOUND", "Nutrition entry not found.");
  }
}
`````

## File: src/services/workoutService.js
`````javascript
import mongoose from "mongoose";
import { assertNotFuture } from "@/lib/dates";
import { ApiError } from "@/lib/errors";
import { calculateProgression } from "@/lib/progression";
import { calculateWorkoutCycle } from "@/lib/workoutCycle";
import ClientProfile from "@/models/ClientProfile";
import WorkoutSession from "@/models/WorkoutSession";

export async function createWorkout({ clientId, recordedByUserId, input }) {
  assertNotFuture(input.completedDate, "Workout date");
  const profile = await ClientProfile.findOne({ clientId });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");

  const plan = profile.workoutPlan;
  const plainPlan = profile.toObject().workoutPlan;
  const workoutDay = plan.days.find((day) => day.dayNumber === input.workoutDayNumber);
  if (!workoutDay) throw new ApiError(404, "WORKOUT_DAY_NOT_FOUND", "Workout day not found.");

  const priorSessions = await WorkoutSession.find({ clientId, planRevision: plan.revision }).lean();
  const cycle = calculateWorkoutCycle(plainPlan, priorSessions);

  const submittedById = new Map(input.exercises.map((exercise) => [exercise.planExerciseId, exercise]));
  if (submittedById.size !== workoutDay.exercises.length) {
    throw new ApiError(400, "VALIDATION_ERROR", "Submit a result for every prescribed exercise.");
  }

  const exercises = workoutDay.exercises.map((planned) => {
    const submitted = submittedById.get(planned._id.toString());
    if (!submitted) throw new ApiError(400, "VALIDATION_ERROR", `Missing result for ${planned.name}.`);
    const sets = submitted.sets.map((set, index) => ({ ...set, setNumber: index + 1 }));
    return {
      planExerciseId: planned._id,
      exerciseName: planned.name,
      targetSnapshot: {
        sets: planned.targetSets,
        reps: planned.targetReps,
        suggestedWeightKg: planned.suggestedWeightKg,
        notes: planned.notes,
      },
      sets,
      notes: submitted.notes,
      progressionStatus: calculateProgression(planned, sets),
    };
  });

  const session = await WorkoutSession.create({
    clientId,
    recordedByUserId,
    completedDate: input.completedDate,
    workoutDayNumber: workoutDay.dayNumber,
    workoutDayName: workoutDay.name,
    planRevision: plan.revision,
    cycleNumber: cycle.cycleNumber,
    exercises,
  });

  const saved = session.toObject();
  return {
    session: saved,
    cycle: calculateWorkoutCycle(plainPlan, [...priorSessions, saved]),
  };
}

export async function listWorkouts(clientId, query) {
  const filter = { clientId };
  if (query.exerciseId) filter["exercises.planExerciseId"] = new mongoose.Types.ObjectId(query.exerciseId);
  const [items, total] = await Promise.all([
    WorkoutSession.find(filter)
      .populate("recordedByUserId", "name role")
      .sort({ completedDate: -1, createdAt: -1 })
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .lean(),
    WorkoutSession.countDocuments(filter),
  ]);
  return { items, page: query.page, limit: query.limit, total, pages: Math.ceil(total / query.limit) };
}

export async function getWorkout(clientId, workoutId) {
  if (!mongoose.isValidObjectId(workoutId)) {
    throw new ApiError(404, "WORKOUT_NOT_FOUND", "Workout not found.");
  }
  const workout = await WorkoutSession.findOne({ _id: workoutId, clientId })
    .populate("recordedByUserId", "name role")
    .lean();
  if (!workout) throw new ApiError(404, "WORKOUT_NOT_FOUND", "Workout not found.");
  return workout;
}
`````

## File: .gitignore
`````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*
!.env.example

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`````

## File: scripts/seedDemo.js
`````javascript
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

const userSchema = new mongoose.Schema({
  name: String, email: { type: String, unique: true }, passwordHash: String, role: String, trainerId: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });
const exerciseSchema = new mongoose.Schema({ name: String, targetSets: Number, targetReps: Number, suggestedWeightKg: Number, notes: String });
const workoutDaySchema = new mongoose.Schema({
  dayNumber: Number, name: String, exercises: [exerciseSchema],
}, { _id: false });
const profileSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, unique: true },
  fitnessProfile: mongoose.Schema.Types.Mixed,
  nutritionTarget: mongoose.Schema.Types.Mixed,
  workoutPlan: { revision: Number, days: [workoutDaySchema] },
}, { timestamps: true });
const workoutSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId, recordedByUserId: mongoose.Schema.Types.ObjectId,
  completedDate: String, workoutDayNumber: Number, workoutDayName: String,
  planRevision: Number, cycleNumber: Number, exercises: [mongoose.Schema.Types.Mixed],
}, { timestamps: { createdAt: true, updatedAt: false } });
const nutritionSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId, logDate: String, foodName: String,
  calories: Number, proteinGrams: Number, notes: String,
}, { timestamps: true });

const demoClients = [
  {
    name: "Alex Morgan", email: "alex.client@fittrack.local",
    fitnessProfile: { age: 29, heightCm: 175, weightKg: 74, biologicalSex: "male", activityLevel: "moderate", goal: "gain" },
    nutritionTarget: { calories: 2700, proteinGrams: 160 },
    days: [
      { name: "Push Strength", exercises: [["Incline Bench Press", 3, 10, 55, "Keep shoulder blades retracted."], ["Cable Fly", 3, 12, 15, "Control the stretch."]] },
      { name: "Lower Body", exercises: [["Back Squat", 4, 8, 80, "Brace before each rep."], ["Romanian Deadlift", 3, 10, 60, "Keep the bar close."]] },
      { name: "Pull & Core", exercises: [["Lat Pulldown", 3, 12, 50, "Lead with the elbows."], ["Plank", null, null, null, "Three controlled holds."]] },
    ],
  },
  {
    name: "Jamie Lee", email: "jamie.client@fittrack.local",
    fitnessProfile: { age: 34, heightCm: 164, weightKg: 62, biologicalSex: "female", activityLevel: "light", goal: "maintain" },
    nutritionTarget: { calories: 1950, proteinGrams: 120 },
    days: [
      { name: "Full Body A", exercises: [["Goblet Squat", 3, 12, 18, "Smooth tempo."], ["Dumbbell Row", 3, 10, 14, "Pause at the top."]] },
      { name: "Full Body B", exercises: [["Hip Thrust", 3, 10, 50, "Full lockout."], ["Dumbbell Shoulder Press", 3, 10, 10, "Avoid arching."]] },
    ],
  },
];

async function main() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required. Run npm run setup:local first.");
  await mongoose.connect(process.env.MONGODB_URI);
  const User = mongoose.models.User || mongoose.model("User", userSchema);
  const ClientProfile = mongoose.models.ClientProfile || mongoose.model("ClientProfile", profileSchema);
  const WorkoutSession = mongoose.models.WorkoutSession || mongoose.model("WorkoutSession", workoutSchema);
  const NutritionEntry = mongoose.models.NutritionEntry || mongoose.model("NutritionEntry", nutritionSchema);

  const trainerEmail = (process.env.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local").toLowerCase();
  const trainerPassword = process.env.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026";
  const trainer = await User.findOneAndUpdate(
    { email: trainerEmail },
    { $set: { name: process.env.TRAINER_SEED_NAME || "Demo Trainer", passwordHash: await bcrypt.hash(trainerPassword, 12), role: "trainer", trainerId: null } },
    { returnDocument: "after", upsert: true, setDefaultsOnInsert: true },
  );

  const clientPasswordHash = await bcrypt.hash("ClientDemo!2026", 12);
  for (const seed of demoClients) {
    const oldClient = await User.findOne({ email: seed.email });
    if (oldClient) {
      await Promise.all([
        ClientProfile.deleteMany({ clientId: oldClient._id }),
        WorkoutSession.deleteMany({ clientId: oldClient._id }),
        NutritionEntry.deleteMany({ clientId: oldClient._id }),
      ]);
      await User.deleteOne({ _id: oldClient._id });
    }

    const client = await User.create({
      name: seed.name, email: seed.email, passwordHash: clientPasswordHash, role: "client", trainerId: trainer._id,
    });
    const profile = await ClientProfile.create({
      clientId: client._id, fitnessProfile: seed.fitnessProfile, nutritionTarget: seed.nutritionTarget,
      workoutPlan: {
        revision: 1,
        days: seed.days.map((day, dayIndex) => ({
          dayNumber: dayIndex + 1, name: day.name,
          exercises: day.exercises.map(([name, targetSets, targetReps, suggestedWeightKg, notes]) => ({ name, targetSets, targetReps, suggestedWeightKg, notes })),
        })),
      },
    });

    const firstDay = profile.workoutPlan.days[0];
    await WorkoutSession.create({
      clientId: client._id, recordedByUserId: client._id, completedDate: dateOffset(-2),
      workoutDayNumber: 1, workoutDayName: firstDay.name, planRevision: 1, cycleNumber: 1,
      exercises: firstDay.exercises.map((exercise) => ({
        planExerciseId: exercise._id, exerciseName: exercise.name,
        targetSnapshot: { sets: exercise.targetSets, reps: exercise.targetReps, suggestedWeightKg: exercise.suggestedWeightKg, notes: exercise.notes },
        sets: exercise.targetSets ? Array.from({ length: exercise.targetSets }, (_, index) => ({ setNumber: index + 1, reps: exercise.targetReps, weightKg: exercise.suggestedWeightKg })) : [],
        notes: "Seeded demo workout",
        progressionStatus: exercise.targetSets && exercise.suggestedWeightKg != null ? "READY_TO_PROGRESS" : "NOT_APPLICABLE",
      })),
    });

    await NutritionEntry.insertMany([
      { clientId: client._id, logDate: dateOffset(0), foodName: "Greek yogurt and berries", calories: 310, proteinGrams: 25, notes: "Breakfast" },
      { clientId: client._id, logDate: dateOffset(0), foodName: "Chicken rice bowl", calories: 680, proteinGrams: 48, notes: "Lunch" },
      { clientId: client._id, logDate: dateOffset(0), foodName: "Protein shake", calories: 220, proteinGrams: 30, notes: "Post-workout" },
    ]);
  }

  console.log("Demo data seeded successfully.");
  console.log(`Trainer login: ${trainerEmail}`);
  console.log("Client logins: alex.client@fittrack.local, jamie.client@fittrack.local");
}

main()
  .catch((error) => {
    console.error(`Demo seed failed: ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
`````

## File: src/app/layout.js
`````javascript
import "./globals.css";

export const metadata = {
  title: "FitTrack Coach API",
  description: "API service for FitTrack Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`````

## File: src/lib/businessRules.test.js
`````javascript
import { describe, expect, it } from "vitest";
import { calculateBmrAndTdee } from "./calculations";
import { calculateProgression, PROGRESSION } from "./progression";
import { calculateWorkoutCycle } from "./workoutCycle";

const plan = { revision: 2, days: [{ dayNumber: 1 }, { dayNumber: 2 }, { dayNumber: 3 }] };

describe("BMR and TDEE", () => {
  it("uses Mifflin-St Jeor and the selected activity factor", () => {
    expect(calculateBmrAndTdee({ age: 25, heightCm: 180, weightKg: 80, biologicalSex: "male", activityLevel: "moderate" }))
      .toEqual({ bmr: 1805, tdee: 2798 });
  });
});

describe("workout cycle", () => {
  it("suggests the first incomplete configured day", () => {
    const cycle = calculateWorkoutCycle(plan, [
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 1 },
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 3 },
    ]);
    expect(cycle.cycleNumber).toBe(1);
    expect(cycle.nextSuggestedDayNumber).toBe(2);
  });

  it("opens the next cycle after every day is complete", () => {
    const sessions = [1, 2, 3].map((day) => ({ planRevision: 2, cycleNumber: 1, workoutDayNumber: day }));
    expect(calculateWorkoutCycle(plan, sessions)).toMatchObject({ cycleNumber: 2, nextSuggestedDayNumber: 1 });
  });

  it("counts repeated workout days once and keeps the next unique day suggested", () => {
    const cycle = calculateWorkoutCycle(plan, [
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 1 },
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 1 },
      { planRevision: 2, cycleNumber: 1, workoutDayNumber: 1 },
    ]);
    expect(cycle).toMatchObject({
      cycleNumber: 1,
      completedCount: 1,
      nextSuggestedDayNumber: 2,
    });
  });

  it("works for every supported plan length", () => {
    for (let length = 1; length <= 7; length += 1) {
      const dynamicPlan = { revision: 1, days: Array.from({ length }, (_, index) => ({ dayNumber: index + 1 })) };
      expect(calculateWorkoutCycle(dynamicPlan, []).days).toHaveLength(length);
      expect(calculateWorkoutCycle(dynamicPlan, []).nextSuggestedDayNumber).toBe(1);
    }
  });
});

describe("progression", () => {
  it("marks complete target sets at prescribed weight ready", () => {
    const target = { targetSets: 3, targetReps: 10, suggestedWeightKg: 20 };
    const sets = [10, 11, 10].map((reps) => ({ reps, weightKg: 20 }));
    expect(calculateProgression(target, sets)).toBe(PROGRESSION.READY);
  });

  it("marks missed targets maintain and unmeasured work not applicable", () => {
    expect(calculateProgression({ targetSets: 3, targetReps: 10, suggestedWeightKg: 20 }, [{ reps: 9, weightKg: 20 }]))
      .toBe(PROGRESSION.MAINTAIN);
    expect(calculateProgression({ targetSets: null, targetReps: null, suggestedWeightKg: null }, []))
      .toBe(PROGRESSION.NOT_APPLICABLE);
  });
});
`````

## File: src/services/clientService.js
`````javascript
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { calculateBmrAndTdee } from "@/lib/calculations";
import { ApiError } from "@/lib/errors";
import { calculateWorkoutCycle } from "@/lib/workoutCycle";
import ClientProfile from "@/models/ClientProfile";
import NutritionEntry from "@/models/NutritionEntry";
import User from "@/models/User";
import WorkoutSession from "@/models/WorkoutSession";

export async function createClient(trainerId, input) {
  if (await User.exists({ email: input.account.email })) {
    throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "That email is already in use.");
  }

  const client = await User.create({
    name: input.account.name,
    email: input.account.email,
    passwordHash: await bcrypt.hash(input.account.password, 12),
    role: "client",
    trainerId,
  });

  try {
    const profile = await ClientProfile.create({
      clientId: client._id,
      fitnessProfile: input.fitnessProfile,
      nutritionTarget: input.nutritionTarget,
      workoutPlan: { revision: 1, days: input.workoutPlan.days },
    });
    return clientDetail(client, profile);
  } catch (error) {
    await User.deleteOne({ _id: client._id });
    throw error;
  }
}

export async function listClients(trainerId) {
  const clients = await User.find({ role: "client", trainerId }).sort({ name: 1 }).lean();
  const ids = clients.map((client) => client._id);
  const [profiles, latestWorkouts] = await Promise.all([
    ClientProfile.find({ clientId: { $in: ids } }).lean(),
    WorkoutSession.aggregate([
      { $match: { clientId: { $in: ids } } },
      { $sort: { completedDate: -1, createdAt: -1 } },
      { $group: { _id: "$clientId", latestWorkoutDate: { $first: "$completedDate" } } },
    ]),
  ]);
  const profileMap = new Map(profiles.map((profile) => [profile.clientId.toString(), profile]));
  const workoutMap = new Map(latestWorkouts.map((item) => [item._id.toString(), item.latestWorkoutDate]));

  return clients.map((client) => ({
    id: client._id.toString(),
    name: client.name,
    email: client.email,
    fitnessGoal: profileMap.get(client._id.toString())?.fitnessProfile?.goal || null,
    latestWorkoutDate: workoutMap.get(client._id.toString()) || null,
  }));
}

export function clientDetail(client, profile) {
  const plainProfile = typeof profile.toObject === "function" ? profile.toObject() : profile;
  return {
    client: { id: client._id.toString(), name: client.name, email: client.email },
    fitnessProfile: plainProfile.fitnessProfile,
    estimates: calculateBmrAndTdee(plainProfile.fitnessProfile),
    nutritionTarget: plainProfile.nutritionTarget,
  };
}

export async function getClientDetail(client) {
  const profile = await ClientProfile.findOne({ clientId: client._id });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return clientDetail(client, profile);
}

export async function updateClient(client, input) {
  const profile = await ClientProfile.findOne({ clientId: client._id });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  client.name = input.name;
  profile.fitnessProfile = input.fitnessProfile;
  await Promise.all([client.save(), profile.save()]);
  return clientDetail(client, profile);
}

export async function deleteClient(clientId) {
  await Promise.all([
    NutritionEntry.deleteMany({ clientId }),
    WorkoutSession.deleteMany({ clientId }),
    ClientProfile.deleteOne({ clientId }),
  ]);
  await User.deleteOne({ _id: clientId });
}

export async function getWorkoutPlanState(clientId) {
  const profile = await ClientProfile.findOne({ clientId }).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  const plan = {
    revision: profile.workoutPlan.revision,
    days: profile.workoutPlan.days.map((day) => ({
      dayNumber: day.dayNumber,
      name: day.name,
      exercises: day.exercises.map((exercise) => ({
        _id: exercise._id,
        name: exercise.name,
        targetSets: exercise.targetSets,
        targetReps: exercise.targetReps,
        suggestedWeightKg: exercise.suggestedWeightKg,
        notes: exercise.notes,
      })),
    })),
  };
  const sessions = await WorkoutSession.find({ clientId, planRevision: plan.revision }).lean();
  const cycle = calculateWorkoutCycle(plan, sessions);

  const latestProgression = {};
  [...sessions]
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((session) => {
      session.exercises.forEach((exercise) => {
        const id = exercise.planExerciseId.toString();
        if (!latestProgression[id]) latestProgression[id] = exercise.progressionStatus;
      });
    });

  return { plan, cycle, latestProgression };
}

export async function updateWorkoutPlan(clientId, input) {
  const profile = await ClientProfile.findOne({ clientId });
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");

  const knownIds = new Set(
    profile.workoutPlan.days.flatMap((day) => day.exercises.map((exercise) => exercise._id.toString())),
  );
  for (const day of input.days) {
    for (const exercise of day.exercises) {
      if (exercise._id && !knownIds.has(exercise._id)) {
        throw new ApiError(400, "INVALID_PLAN", "An exercise identifier does not belong to this plan.");
      }
    }
  }

  profile.workoutPlan = {
    revision: profile.workoutPlan.revision + 1,
    days: input.days.map((day) => ({
      ...day,
      exercises: day.exercises.map((exercise) => ({
        ...exercise,
        _id: exercise._id || new mongoose.Types.ObjectId(),
      })),
    })),
  };
  await profile.save();
  return getWorkoutPlanState(clientId);
}

export async function getNutritionTarget(clientId) {
  const profile = await ClientProfile.findOne({ clientId }).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return profile.nutritionTarget;
}

export async function updateNutritionTarget(clientId, target) {
  const profile = await ClientProfile.findOneAndUpdate(
    { clientId },
    { $set: { nutritionTarget: target } },
    { returnDocument: "after", runValidators: true },
  ).lean();
  if (!profile) throw new ApiError(404, "CLIENT_NOT_FOUND", "Client profile not found.");
  return profile.nutritionTarget;
}
`````

## File: next.config.mjs
`````javascript
/** @type {import('next').NextConfig} */

const nextConfig = {

  output: "standalone",

  basePath: "/backend",

};



export default nextConfig;
`````

## File: package.json
`````json
{
  "name": "backend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest run",
    "smoke": "node scripts/smokeApi.js",
    "setup:local": "node scripts/setupLocalEnv.js",
    "create-trainer": "node scripts/createTrainer.js",
    "seed": "node scripts/seedDemo.js"
  },
  "dependencies": {
    "@next/env": "^16.3.5",
    "bcrypt": "^6.0.0",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.10.1",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "vitest": "^5.0.1"
  }
}
`````

## File: README.md
`````markdown
# FitTrack Coach API

Next.js App Router API for authentication, trainer/client management, workout
planning and immutable workout history, nutrition tracking, and account changes.

## Local setup

Requirements: Node.js 22 LTS and access to the supplied MongoDB Atlas cluster.

```bash
npm install
npm run setup:local
npm run seed
npm run dev
```

The API runs at `http://localhost:3000`; health is available at
`http://localhost:3000/api/health`. `setup:local` reads
`../atlas-credentials.env`, writes an ignored `.env.local`, and preserves an
existing local JWT secret when rerun.

## Demo accounts

After `npm run seed`:

| Role    | Email                         | Password            |
| ------- | ----------------------------- | ------------------- |
| Trainer | `demo.trainer@fittrack.local` | `FitTrackDemo!2026` |
| Client  | `alex.client@fittrack.local`  | `ClientDemo!2026`   |
| Client  | `jamie.client@fittrack.local` | `ClientDemo!2026`   |

The seed is repeatable. It refreshes only these named demo accounts and their
associated data.

## Checks

```bash
npm test
npm run lint
npm run build
```

With the development server running and demo data seeded, `npm run smoke`
checks both roles and the main read flows against the live API.

Completed workout sessions intentionally have no update or delete route.
`````
