// src/features/tasks/context/tasksReducer.ts
import type { Task } from '../types/task.types';

// 1. Define the Actions
// This is a strict catalog of everything that can possibly happen to our tasks.
export type TaskAction =
  | { type: 'CREATE_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string } // string represents the task ID
  | { type: 'TOGGLE_TASK_STATUS'; payload: string };

// 2. The Reducer Function
// It always takes two arguments: the current state (array of tasks), and the action being performed.
export function tasksReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {

    case 'CREATE_TASK':
      // Return a NEW array: all the old tasks, plus the new one at the beginning.
      return [action.payload, ...state];

    case 'DELETE_TASK':
      // Return a NEW array: filter out the task that matches the payload ID.
      return state.filter(task => task.id !== action.payload);

    case 'TOGGLE_TASK_STATUS':
      // Return a NEW array: find the specific task, and flip its 'completed' boolean.
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
  }
}