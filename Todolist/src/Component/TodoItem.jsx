import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoItem = ({key , data , OnHandledeletetask, OnheadleCheckTodo , checked}) => {
    return (
        <li key={key} className="todo-item">
          <span className={checked ? "checklist" : "notChecklist"}>{data}</span>
          <div className="todo-actions">
            <button className="todo-complete-button" onClick={() => {OnheadleCheckTodo(data)}}>
              <MdCheck />
            </button>
            <button className="todo-delete-button" onClick={() => OnHandledeletetask(data)}>
              <MdDeleteForever />
            </button>
          </div>
        </li>
      );
}
