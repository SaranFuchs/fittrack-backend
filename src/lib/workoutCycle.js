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
