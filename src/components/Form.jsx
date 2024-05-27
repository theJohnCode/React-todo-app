/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ todos, SetTodos }) {
  const [todo, SetTodo] = useState({
    name: "",
    completed: false,
    id: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    SetTodos([...todos, todo]);

    SetTodo({
      name: "",
      completed: false,
      id: "",
    });
  }
  return (
    <form id="todo-form">
      <div className="flex mb-4">
        <input
          type="text"
          value={todo.name}
          onChange={(e) =>
            SetTodo({
              name: e.target.value,
              completed: false,
              id: new Date().getTime(),
            })
          }
          className="w-full px-4 py-2 mr-2 rounded-lg
                       border-gray-300 focus:outline-none
                        focus:border-blue-500"
          placeholder="Add new task"
          required={true}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 
                      text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
}
