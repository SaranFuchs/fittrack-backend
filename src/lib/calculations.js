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
