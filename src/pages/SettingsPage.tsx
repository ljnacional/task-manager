import { Link } from 'react-router-dom';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">⚙️ Settings</h1>
      <p className="text-slate-600 mb-4">Theme toggle and preferences will go here.</p>
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        ← Back to Dashboard
      </Link>
    </div>
  );
}