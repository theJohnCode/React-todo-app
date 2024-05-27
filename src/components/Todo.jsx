import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, SetTodos] = useState([]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Form todos={todos} SetTodos={SetTodos} />
          <TodoList todos={todos} SetTodos={SetTodos} />
        </div>
      </div>
    </div>
  );
}
