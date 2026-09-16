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
