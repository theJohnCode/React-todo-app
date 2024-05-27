/* eslint-disable react/prop-types */

export default function TodoItem({ todo, todos, SetTodos }) {
  function handleDelete(todo) {
    SetTodos(todos.filter((td) => td.id !== todo.id));
  }

  function setIsCompleted(id) {
   let a =  todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    SetTodos(a);
  }

  return (
    <li className="border-b border-gray-200 flex items-center justify-between py-4">
      <label className="flex items-center">
        <input
          onChange={() => setIsCompleted(todo.id)}
          type="checkbox"
          className="mr-2"
        />
        <span
          className={
            todo.completed ? "line-through text-xl" : "text-xl font-bold"
          }
        >
          {todo.name}
        </span>
      </label>
      <div>
        <button
          className="text-red-500 hover:text-red-700
                     mr-2"
          onClick={() => handleDelete(todo)}
        >
          Delete
        </button>
        <button
          className="text-blue-500
                     hover:text-blue-700"
        >
          Edit
        </button>
      </div>
    </li>
  );
}
