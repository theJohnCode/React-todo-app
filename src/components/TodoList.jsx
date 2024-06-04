/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, setTodos, setEditedTodo, editedTodo }) {
  const sortedTodos = todos.slice().sort((a,b) => Number(a.completed) - Number(b.completed));
  return (
    <ul id="todo-list">
      {sortedTodos.map((todo, index) => (
        // @ts-ignore
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          index={index}
          setTodos={setTodos}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
        />
      ))}
    </ul>
  );
}
