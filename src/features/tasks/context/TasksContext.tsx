// src/features/tasks/context/TasksContext.tsx
import { createContext, useReducer, type ReactNode, useContext } from 'react';
import { tasksReducer, type TaskAction } from './tasksReducer';
import type { Task } from '../types/task.types';
import { dummyTasks } from '../services/taskStorage'; // We'll use our dummy data as the initial state!

// 1. Define the shape of our Context
interface TasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

// 2. Create the Context (The actual broadcast tower)
const TasksContext = createContext<TasksContextType | undefined>(undefined);

// 3. Create the Provider Component (The battery that powers the tower)
export function TasksProvider({ children }: { children: ReactNode }) {
  // We hook up our reducer here, and feed it the dummy data to start.
  const [tasks, dispatch] = useReducer(tasksReducer, dummyTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

// 4. Create a Custom Hook (The receiver radio)
// This is a pro-move. Instead of components having to import useContext AND TasksContext,
// they just use this one simple hook.
export function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}