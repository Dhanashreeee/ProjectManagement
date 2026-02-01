import { mockComments } from '../data/mockData';

function CommentsPanel() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h4 className="font-semibold text-slate-800 text-sm">Recent comments</h4>
        <p className="text-xs text-slate-500 mt-0.5">Task discussions and updates</p>
      </div>
      <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
        {mockComments.map((c) => (
          <div key={c.id} className="px-5 py-3 hover:bg-slate-50/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">
                {c.author.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-700">{c.author}</p>
                <p className="text-sm text-slate-600 mt-0.5">{c.text}</p>
                <p className="text-[10px] text-slate-400 mt-1">{c.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsPanel;
