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
