export function getTaskSummary(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const highPriority = tasks.filter((task) => task.priority === "high").length;

  return {
    total,
    completed,
    pending: total - completed,
    highPriority
  };
}
