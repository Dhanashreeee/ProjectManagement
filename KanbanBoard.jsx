import TaskCard from './TaskCard';
import { mockTasks } from '../data/mockData';

const COLUMNS = [
  { id: 'Not Started', label: 'Not Started' },
  { id: 'In Progress', label: 'In Progress' },
  { id: 'Completed', label: 'Completed' },
];

function KanbanBoard() {
  const getTasksByStatus = (status) => mockTasks.filter((t) => t.status === status);

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 min-h-0 flex-1">
      {COLUMNS.map((col) => {
        const tasks = getTasksByStatus(col.id);
        return (
          <div key={col.id} className="min-w-[280px] w-[280px] flex flex-col shrink-0">
            <h3 className="text-slate-500 font-bold text-xs uppercase mb-4 tracking-wider flex items-center gap-2">
              {col.label}
              <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full text-[10px]">
                {tasks.length}
              </span>
            </h3>
            <div className="flex-1 bg-slate-100/50 rounded-xl p-3 border border-slate-200/50 overflow-y-auto min-h-[200px]">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  priority={task.priority}
                  subtasksCount={task.subtasksCount}
                  assignee={task.assignee}
                  deadline={task.deadline}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;
