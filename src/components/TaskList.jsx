import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-3">Tasks</h3>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
          placeholder="Add a task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 border-b border-gray-100"
          >
            <span className="text-gray-700">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
