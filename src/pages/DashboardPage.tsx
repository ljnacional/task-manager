import { Link } from 'react-router-dom';
import { useTasks } from '../features/tasks/context/TasksContext';

export default function DashboardPage() {
  const { tasks } = useTasks();
  return (
    <div className="p-8 max-w-5xl mx-auto">

      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">📊 Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage and track your current tasks.</p>
        </div>
        <Link
          to="/tasks/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
        >
          + Create Task
        </Link>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* We use .map() to loop over our array and return a visual "card" for each task */}
        {tasks.map((task) => (

          <div key={task.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group">

            {/* Status Badge */}
            <div className="absolute top-5 right-5">
              {task.completed ? (
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Completed</span>
              ) : (
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">Pending</span>
              )}
            </div>

            {/* Task Content */}
            <h2 className="text-lg font-semibold text-slate-800 pr-20">{task.title}</h2>
            {task.description && (
              <p className="text-slate-600 mt-2 text-sm line-clamp-2">{task.description}</p>
            )}

            {/* Footer & Action Link */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-mono">ID: {task.id}</span>

              {/* Dynamic Link to the specific task! */}
              <Link
                to={`/tasks/${task.id}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                View Details <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}