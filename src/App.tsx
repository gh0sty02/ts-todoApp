import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";

import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="app">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onTodoDelete={todoDeleteHandler} />
    </div>
  );
};

export default App;
