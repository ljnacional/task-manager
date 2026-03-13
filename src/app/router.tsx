import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from '../pages/DashboardPage';
import TaskCreatePage from '../pages/TaskCreatePage';
import TaskDetailPage from '../pages/TaskDetailPage';
import TaskEditPage from '../pages/TaskEditPage';
import SettingsPage from '../pages/SettingsPage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardLayout from "../layouts/DashboardLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<DashboardLayout />}>
          {/* Standard Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/tasks/new" element={<TaskCreatePage />} />

          {/* Dynamic Routes */}
          <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
          <Route path="/tasks/:taskId/edit" element={<TaskEditPage />} />
        </Route>

        {/* The Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}