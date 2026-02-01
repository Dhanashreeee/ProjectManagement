function Sidebar({ activeView, setActiveView }) {
  const navItems = [
    { id: 'tasks', label: 'Tasks', icon: '📊' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'files', label: 'Files', icon: '📁' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
      <div className="p-6 border-b border-slate-700/50">
        <h1 className="text-white text-xl font-bold flex items-center gap-2">
          <span className="bg-blue-600 p-1.5 rounded-lg text-white text-sm">Project</span>
          Management
        </h1>
      </div>
      <nav className="flex-1 p-4 flex flex-col gap-1">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActiveView(id)}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-colors ${
              activeView === id
                ? 'bg-slate-700 text-white font-medium'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="text-base">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
