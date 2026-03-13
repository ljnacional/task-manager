// src/app/providers.tsx
import type { ReactNode } from 'react';
import { TasksProvider } from '../features/tasks/context/TasksContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    // If you ever add a <ThemeProvider> later, you just wrap it around this!
    <TasksProvider>
      {children}
    </TasksProvider>
  );
}