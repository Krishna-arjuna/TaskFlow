import { useState } from "react";

function RoutineInput({ addRoutine }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addRoutine(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add daily routine..."
        className="flex-1 border rounded-lg px-3 py-2"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}

export default RoutineInput;
