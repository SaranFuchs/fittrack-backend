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
