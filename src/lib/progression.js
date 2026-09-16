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
