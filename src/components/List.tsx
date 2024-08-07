import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Item";
import { RootState } from "../app/store";
const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
