import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TaskBoard from "../components/TaskBoard";
import TaskDetails from "../components/TaskDetails";

function Dashboard() {
  // ---------- STATE ----------
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [routines, setRoutines] = useState(() => {
    return JSON.parse(localStorage.getItem("routines")) || [];
  });

  const [selectedTask, setSelectedTask] = useState(null);

  // Filters
  const [activeView, setActiveView] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");

  // ---------- TASK ACTIONS ----------
  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (selectedTask?.id === id) setSelectedTask(null);
  };

  // ---------- ROUTINE ACTIONS ----------
  const addRoutine = (text) => {
    setRoutines((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleRoutine = (id) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, completed: !r.completed } : r
      )
    );
  };

  const deleteRoutine = (id) => {
    setRoutines((prev) => prev.filter((r) => r.id !== id));
  };

  // ---------- FILTER ----------
  const filteredTasks = tasks.filter((task) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const taskDate = new Date(task.date);
    taskDate.setHours(0, 0, 0, 0);

    if (
      searchQuery &&
      !task.text.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (activeView === "today") {
      return taskDate.getTime() === today.getTime();
    }

    if (activeView === "upcoming") {
      return taskDate > today;
    }

    return true;
  });

  // ---------- PERSIST ----------
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [tasks, routines]);

  // ---------- UI ----------
  return (
    <div className="h-screen bg-gray-100 flex p-6">
      <div className="bg-white rounded-xl shadow flex w-full overflow-hidden">
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          setSearchQuery={setSearchQuery}
        />

        <TaskBoard
          tasks={filteredTasks}
          routines={routines}
          addTask={addTask}
          addRoutine={addRoutine}
          toggleTask={toggleTask}
          toggleRoutine={toggleRoutine}
          deleteTask={deleteTask}
          deleteRoutine={deleteRoutine}
          selectTask={setSelectedTask}
        />

        <TaskDetails task={selectedTask} />
      </div>
    </div>
  );
}

export default Dashboard;