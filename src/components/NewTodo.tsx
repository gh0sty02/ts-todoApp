import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoInfoRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const todoText = todoInfoRef.current!.value;
    props.onAddTodo(todoText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Enter Todo </label>
        <input type="text" name="text" id="todo-text" ref={todoInfoRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
