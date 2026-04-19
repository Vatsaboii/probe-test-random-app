export function formatSummary(summary) {
  return [
    `Total tasks: ${summary.total}`,
    `Completed: ${summary.completed}`,
    `Pending: ${summary.pending}`,
    `High priority: ${summary.highPriority}`
  ].join("\n");
}
