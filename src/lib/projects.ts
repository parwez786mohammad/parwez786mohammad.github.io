/** The outcome to feature on a project card: the first one with a measurable figure, else the first. */
export function headlineOutcome(outcomes: string[]): string | undefined {
  return outcomes.find((o) => /\d+%/.test(o)) ?? outcomes[0];
}
