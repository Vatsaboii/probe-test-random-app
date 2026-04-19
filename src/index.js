import { tasks } from "./data/tasks.js";
import { formatSummary } from "./lib/formatters.js";
import { getTaskSummary } from "./lib/taskSummary.js";

const summary = getTaskSummary(tasks);
console.log(formatSummary(summary));
