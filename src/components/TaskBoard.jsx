import TodoInput from "./TodoInput";
import RoutineInput from "./RoutineInput";

function TaskBoard({
  tasks,
  routines,
  addTask,
  addRoutine,
  toggleTask,
  toggleRoutine,
  deleteTask,
  deleteRoutine,
  selectTask,
}) {
  return (
    <div className="flex-1 p-6 border-r overflow-auto">
      {/* ---------- ROUTINES ---------- */}
      <h2 className="text-lg font-semibold mb-2">Daily Routine</h2>

      <RoutineInput addRoutine={addRoutine} />

      <div className="space-y-2 mb-6">
        {routines.map((r) => (
          <div
            key={r.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={r.completed}
                onChange={() => toggleRoutine(r.id)}
              />
              <span className={r.completed ? "line-through text-gray-400" : ""}>
                {r.text}
              </span>
            </label>

            <button
              onClick={() => deleteRoutine(r.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ---------- TASKS ---------- */}
      <h2 className="text-lg font-semibold mb-2">Tasks</h2>

      <TodoInput addTask={addTask} />

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-start p-3 border rounded"
          >
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => selectTask(task)}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <div>
                <p
                  className={`font-medium ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </p>
                <p className="text-sm text-gray-500">
                  {task.date} • {task.time}
                </p>
              </div>
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;