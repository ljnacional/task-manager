import { Outlet, Link, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  // We use this to check the current URL so we can highlight the active menu item
  const location = useLocation();

  // A small helper function to keep our Tailwind classes clean
  const getLinkStyles = (path: string) => {
    const baseStyle = "block px-4 py-2 rounded-lg transition-colors duration-200 font-medium";
    const isActive = location.pathname.includes(path) && path !== '/' || location.pathname === path;

    return isActive
      ? `${baseStyle} bg-blue-600 text-white`
      : `${baseStyle} text-slate-400 hover:bg-slate-800 hover:text-white`;
  };

  return (
    // 1. The Outer Shell (Prevents full-page scrolling, locks to screen height)
    <div className="flex h-screen bg-slate-50 overflow-hidden">

      {/* 2. The Persistent Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl z-10">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <h1 className="text-xl font-bold tracking-wider text-slate-100">TASK_ARCHITECT</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link to="/dashboard" className={getLinkStyles('/dashboard')}>
            📊 Dashboard
          </Link>
          <Link to="/tasks/new" className={getLinkStyles('/tasks/new')}>
            ✍️ Create Task
          </Link>
          <Link to="/settings" className={getLinkStyles('/settings')}>
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* 3. The Main Content Wrapper */}
      <div className="flex-1 flex flex-col relative">

        {/* 4. The Persistent Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <span className="text-slate-500 font-medium">Workspace</span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">System Admin</span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
          </div>
        </header>

        {/* 5. The Magic Injector (Outlet) */}
        <main className="flex-1 overflow-y-auto relative">
          <div className="absolute inset-0">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}