// src/pages/TaskCreatePage.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTasks } from '../features/tasks/context/TasksContext'; // 1. Import your custom hook
import type { Task } from '../features/tasks/types/task.types'; // 2. Import the full Task contract

export default function TaskCreatePage() {
  const navigate = useNavigate();

  // 3. Grab the dispatch function from our Context tower
  const { dispatch } = useTasks();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 4. Construct the perfect, completed Task object
    const newTask: Task = {
      // For now, we use Date.now() to generate a quick, unique ID
      id: `task-${Date.now()}`,
      title: title,
      description: description,
      completed: false,
      // Create a fresh ISO timestamp for right now
      createdAt: new Date().toISOString(),
    };

    // 5. Fire the Action to the Reducer!
    dispatch({ type: 'CREATE_TASK', payload: newTask });

    // 6. Drive back to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <Link to="/dashboard" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mt-4">✍️ Create a Task</h1>
        <p className="text-slate-500 mt-1">Add a new actionable item to your workspace.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">

        <div className="mb-5">
          <label htmlFor="title" className="block text-sm font-bold text-slate-700 mb-2">
            Task Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="e.g., Update UI wireframes"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="description" className="block text-sm font-bold text-slate-700 mb-2">
            Description <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder="Add any helpful details or links here..."
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <Link to="/dashboard" className="px-5 py-2.5 text-slate-600 font-medium hover:bg-slate-50 rounded-lg transition-colors">
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Save Task
          </button>
        </div>

      </form>
    </div>
  );
}