/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://todo-app.test/api/todos", {
        title: newTodo,
      });
      const newTodos = [...todos, response.data];
      setTodos(newTodos);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
    setNewTodo(""); // Clear the input
  };

  return (
    <form id="todo-form" onSubmit={addTodo}>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full px-4 py-2 mr-2 rounded-lg
                       border-gray-300 focus:outline-none
                        focus:border-blue-500"
          placeholder="Add new task"
          required={true}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 
                      text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
}
