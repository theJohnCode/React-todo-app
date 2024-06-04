/* eslint-disable react/prop-types */

import axios from "axios";
import EditModal from "./EditModal";
import { useState } from "react";

export default function TodoItem({
  todo,
  todos,
  setTodos,
  setEditedTodo,
  editedTodo,
  index,
}) {
  const [open, setOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  function openModalDialog(todo) {
    setEditedTodo(todo);
    setOpen(true);
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://todo-app.test/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleCompleted = async () => {
    try {
      // Create a new object with the updated completed status
      const updatedTodo = { ...todo, completed: !isCompleted };
      // Send a PUT request to the server to update the todo
      const response = await axios.put(
        `http://todo-app.test/api/todos/updateIsCompleted/${todo.id}`,
        updatedTodo
      );

      // Update the todos state with the new array
      const newTodos = todos.map((item, i) => {
        if (i === index) {
          return response.data; // Use the data returned from the server
        }
        return item;
      });
      setTodos(newTodos);

      // Update the isCompleted state to reflect the new value
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <li className="border-b border-gray-200 flex items-center justify-between py-4">
      <label className="flex items-center">
        <input
          checked={isCompleted}
          onChange={toggleCompleted}
          type="checkbox"
          className="mr-2"
        />
        <span
          className={
            isCompleted
              ? "line-through text-xl capitalize"
              : "text-xl font-bold capitalize"
          }
        >
          {todo.title}
        </span>
      </label>
      <div className="text-left w-3/6">
        <button
          className="text-red-500 hover:text-red-700
                     mr-2"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          type="button"
          className="text-blue-500
          hover:text-blue-700"
          onClick={() => openModalDialog(todo)}
        >
          Edit
        </button>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ml-3 w-[120px]">
          <svg
            className="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>
          {todo.created_at}
        </span>
        <EditModal
          open={open}
          setOpen={setOpen}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </li>
  );
}
