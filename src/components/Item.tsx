import { Todo } from "../components/types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
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
  );
};

export default TodoItem;
