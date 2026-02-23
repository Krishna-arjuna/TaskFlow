function TodoItem({ task, index, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
