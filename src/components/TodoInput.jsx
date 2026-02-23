import { useState } from "react";

function TodoInput({ addTask }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (!text || !date || !time) {
      alert("Please enter task, date and time");
      return;
    }

    addTask({
      id: Date.now(),
      text,
      date,
      time,
    });

    setText("");
    setDate("");
    setTime("");
  };

  return (
    <div className="space-y-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task name"
        className="w-full border rounded-lg px-3 py-2"
      />

      <div className="flex gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg px-3 py-2 w-1/2"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border rounded-lg px-3 py-2 w-1/2"
        />
      </div>

      <button
        onClick={handleAdd}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
