import { projectHealth, mockMilestones } from '../data/mockData';

function HealthDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
      <div className="md:col-span-8 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Project Health</h4>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${projectHealth}%` }}
          />
        </div>
        <p className="text-sm text-slate-500 mt-2">{projectHealth}% on track</p>
      </div>
      <div className="md:col-span-4 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Milestones</h4>
        <div className="flex flex-wrap gap-2">
          {mockMilestones.map((m) => (
            <span
              key={m.id}
              className={`text-xs px-2.5 py-1.5 rounded-lg font-medium ${
                m.status === 'completed'
                  ? 'bg-emerald-100 text-emerald-700'
                  : m.status === 'current'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-600'
              }`}
            >
              {m.name} {m.status === 'completed' ? '✓' : m.status === 'current' ? '→' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthDashboard;
