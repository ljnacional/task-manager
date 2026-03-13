import { Link, useParams } from 'react-router-dom';

export default function TaskEditPage() {
  const { taskId } = useParams();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">✏️ Edit Task</h1>
      <p className="mb-4 text-slate-600">You are editing Task ID: {taskId}</p>
      <div className="p-6 bg-slate-100 rounded border border-slate-200 mb-4">
        <p className="text-slate-500 italic">Edit form will go here...</p>
      </div>
      <Link to={`/tasks/${taskId}`} className="text-blue-600 hover:underline">
        Cancel Editing
      </Link>
    </div>
  );
}