function TaskCard({ title, priority, subtasksCount, assignee, deadline }) {
  const priorityStyles = {
    High: 'bg-red-100 text-red-600',
    Medium: 'bg-amber-100 text-amber-700',
    Low: 'bg-slate-100 text-slate-600',
  };
  const style = priorityStyles[priority] || priorityStyles.Low;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-3 hover:shadow-md hover:border-slate-300 transition-all cursor-grab active:cursor-grabbing">
      <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide ${style}`}>
        {priority}
      </span>
      <h4 className="font-semibold text-slate-800 mt-2 text-sm">{title}</h4>
      <p className="text-xs text-slate-500 mt-1">{subtasksCount} subtasks</p>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600">
            {assignee.charAt(0)}
          </div>
          <span className="text-xs text-slate-600 truncate max-w-[100px]">{assignee}</span>
        </div>
        <span className="text-[10px] text-slate-400 font-medium shrink-0">📅 {deadline}</span>
      </div>
    </div>
  );
}

export default TaskCard;
