// src/pages/TaskDetailPage.tsx
import { useParams, Link } from 'react-router-dom';
import { useTasks } from '../features/tasks/context/TasksContext';

export default function TaskDetailPage() {
  // 1. Read the URL
  // The variable name 'taskId' MUST match what we wrote in router.tsx (:taskId)
  const { taskId } = useParams();
  const { tasks } = useTasks();

  // 2. Query the "Database"
  // We search our array for the task that matches the ID in the URL
  const task = tasks.find((t) => t.id === taskId);

  // 3. The Unhappy Path (Defensive UI)
  // What if the user types /tasks/999 directly into their browser?
  if (!task) {
    return (
      <div className="p-8 max-w-2xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Task Not Found</h2>
        <p className="text-slate-600 mb-6">We couldn't find a task with the ID: <span className="font-mono">{taskId}</span></p>
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          &larr; Return to Dashboard
        </Link>
      </div>
    );
  }

  // 4. The Happy Path (Display the Data)
  return (
    <div className="p-8 max-w-3xl mx-auto">

      {/* Breadcrumb Navigation */}
      <Link to="/dashboard" className="text-slate-500 hover:text-blue-600 text-sm mb-6 inline-block transition-colors">
        &larr; Back to Dashboard
      </Link>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">

        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-slate-900 pr-12">{task.title}</h1>

          {/* Status Badge */}
          {task.completed ? (
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full border border-green-200 shrink-0">
              Completed
            </span>
          ) : (
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-bold rounded-full border border-amber-200 shrink-0">
              Pending
            </span>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</h3>
            <p className="text-slate-700 leading-relaxed">
              {task.description ? task.description : <span className="italic text-slate-400">No description provided.</span>}
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Created On</h3>
              {/* We convert the ISO string into a readable date! */}
              <p className="text-slate-700 text-sm font-medium">
                {new Date(task.createdAt).toLocaleDateString('en-US', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 text-right">Task ID</h3>
              <p className="text-slate-500 font-mono text-sm">{task.id}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          to={`/tasks/${task.id}/edit`}
          className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-sm font-medium"
        >
          Edit Task
        </Link>
        <button
          className="border border-red-200 text-red-600 px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors shadow-sm font-medium ml-auto"
        >
          Delete Task
        </button>
      </div>

    </div>
  );
}