export interface Task {
  id: string;
  title: string;
  description?: string; // The '?' makes this field optional
  completed: boolean;
  createdAt: string;    // We will store dates as ISO strings (e.g., "2026-03-14T10:00:00Z")
}

// We also define a type for when we CREATE a new task.
// When creating a task, we don't have an ID or createdAt date yet!
export type TaskDraft = Omit<Task, 'id' | 'createdAt'>;