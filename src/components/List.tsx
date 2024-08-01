import React from "react";
import { Todo } from "../components/types";
type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complited}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
          <span className="del" onClick={() => deleteTodo(todo.id)}>
            &times;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
