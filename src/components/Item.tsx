import { useDispatch } from "react-redux";
import { Todo } from "../components/types";
import { removeTodo, toggleTodo } from "./todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="todo" key={todo.id}>
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.complited}
        onChange={() => dispatch(toggleTodo(todo))}
      />
      <span>{todo.text}</span>
      <span className="del" onClick={() => dispatch(removeTodo(todo))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
