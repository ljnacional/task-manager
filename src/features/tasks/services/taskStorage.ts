// src/features/tasks/services/taskStorage.ts
import type { Task } from '../types/task.types';

// We export a hardcoded array of tasks that strictly follows your Task interface.
export const dummyTasks: Task[] = [
  {
    id: "task-001",
    title: "Draft UI/UX wireframes for Dashboard",
    description: "Create high-fidelity mockups in Figma focusing on accessibility and contrast.",
    completed: true,
    createdAt: "2026-03-10T08:30:00Z"
  },
  {
    id: "task-002",
    title: "Finalize thesis methodology section",
    description: "Write up the data gathering procedure for detecting prompt injection attacks in small language models.",
    completed: false,
    createdAt: "2026-03-12T14:15:00Z"
  },
  {
    id: "task-003",
    title: "Check Mini-ITX motherboard dimensions",
    description: "Verify clearance for the new low-profile CPU cooler before ordering parts.",
    completed: false,
    createdAt: "2026-03-13T09:00:00Z"
  },
  {
    id: "task-004",
    title: "Buy ingredients for mango graham",
    description: "Need graham crackers, all-purpose cream, condensed milk, and ripe mangoes.",
    completed: false,
    createdAt: "2026-03-14T10:00:00Z"
  }
];