import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tight">TASK_ARCHITECT v1.0</span>
          <div className="text-xs uppercase tracking-widest text-slate-400">Vite + TS + Tailwind v4</div>
        </div>
      </nav>
    </BrowserRouter>
  );
}