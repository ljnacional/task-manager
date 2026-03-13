// src/app/App.tsx
import { AppRouter } from './router';
import { Providers } from './providers';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* The Broadcast Tower is now active! 
        Everything inside <Providers> can read from and write to the global state.
      */}
      <Providers>
        <AppRouter />
      </Providers>
    </div>
  );
}