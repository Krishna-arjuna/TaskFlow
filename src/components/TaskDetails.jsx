function TaskDetails({ task }) {
  if (!task) {
    return (
      <div className="w-80 p-6 text-gray-400">
        Select a task to view details
      </div>
    );
  }

  return (
    <div className="w-80 p-6">
      <h2 className="text-lg font-semibold mb-4">Task Details</h2>

      <p
        className={`font-medium ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </p>

      <p className="mt-2 text-gray-600">📅 {task.date}</p>
      <p className="text-gray-600">⏰ {task.time}</p>

      <p className="mt-2 text-sm">
        Status:{" "}
        <span
          className={`font-semibold ${
            task.completed ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </p>
    </div>
  );
}

export default TaskDetails;
