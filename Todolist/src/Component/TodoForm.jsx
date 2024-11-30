import { useState } from "react";
import { TodoDate } from "./TodoDate";
export const TodoForm = ({ addTodo }) => {

  const [inputValue, setInputValue] = useState({})

  const handleInputValue = (value) => {
    setInputValue({id:value , content:value , checked : false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue({id: "" , content: "" , checked: false});
  };

  return (
    <section className="todo-section">
       <h1 className="todo-title">Todo List</h1>
       <TodoDate />
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="task"
            placeholder="Enter a task"
            className="todo-input"
            value={inputValue.content}
            onChange={(e) => handleInputValue(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-button">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
