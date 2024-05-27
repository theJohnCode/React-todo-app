/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, SetTodos }) {
  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        // @ts-ignore
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          SetTodos={SetTodos}
        />
      ))}
    </ul>
  );
}
