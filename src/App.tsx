import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./components/todoSlice";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import TodoList from "./components/List";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="App">
      <h1>ToDo</h1>
      <InputForm text={text} handleSubmit={addTask} handleInput={setText} />
      <TodoList />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
