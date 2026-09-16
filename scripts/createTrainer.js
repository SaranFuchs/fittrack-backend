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
