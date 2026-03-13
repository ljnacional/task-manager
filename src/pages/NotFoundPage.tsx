import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto text-center mt-20">
      <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-600 mb-6">Page Not Found</h2>
      <p className="text-slate-500 mb-8">The route you are looking for doesn't exist.</p>
      <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Return to Safety (Dashboard)
      </Link>
    </div>
  );
}