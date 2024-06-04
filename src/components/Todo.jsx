import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import axios from "axios";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const [editedTodo, setEditedTodo] = useState({});


  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://todo-app.test/api/todos");
      setTodos(response.data);

    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };


  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
      <div className="md:w-1/2 mx-auto mb-2 ">
        <div className="bg-white shadow-md rounded-lg p-6">
         <h1 className=" font-semibold">Completed: <span className="text-red-300">{completedTodos}</span></h1>
         <h1 className=" font-semibold">Total Todos: <span className="text-blue-300">{todos.length}</span></h1>
        </div>
      </div>
      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Form todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos}  
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo} />
        </div>
      </div>
    </div>
  );
}
