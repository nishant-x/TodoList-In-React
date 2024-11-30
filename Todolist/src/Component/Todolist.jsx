import { useState } from "react";
import "./Todolist.css";

import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

export default function Todolist() {

  // Localy store the data 
  const TodoKey = "reactTodo";
  const [task, setTask] = useState(() =>{
    const storedTask = localStorage.getItem(TodoKey);   
    return storedTask ? JSON.parse(storedTask) : []
  });

  const handleFormSubmit = (inputValue) => {

    const {id , content , checked} = inputValue;
    // Fixed type
    // if (!inputValue) return;
    if(!content) return;

    // if (task.includes(inputValue)) return;
    
    const ifTodoContentMatched = task.find((currTask) => currTask.content === content );
    if(ifTodoContentMatched) return;
    // Add new task to the state
    setTask((prevTask) => [...prevTask, {id , content , checked}]);
  };

  localStorage.setItem(TodoKey, JSON.stringify(task));

  // Deleting the task
  const Handledeletetask = (value) => {
    const updatetask = task.filter((currTask) => currTask.content !== value); // filter return the value which is not equal to value
    setTask(updatetask);
  };

  // Deleting all task
  const handleAllClear = () => {
    setTask({});
  };

  // Todo HandlecheckTodo
  const handlecheckTodo = (content) => {
    const updatetask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
        }
        else{
          return currTask;
        }
    });
    setTask(updatetask);
  }
  return (
    <>
      <TodoForm addTodo={handleFormSubmit} />

      <section className="todo-list-section">
        <ul className="todo-list">
          {task.map((currTask) => {
            return (
              <TodoItem
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                OnHandledeletetask={Handledeletetask}
                OnheadleCheckTodo = {handlecheckTodo}
              />
            );
          })}
        </ul>
        <button className="clear-all" onClick={handleAllClear}>
          Clear all
        </button>
      </section>
    </>
  );
}
