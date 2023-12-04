import { useRef } from "react";
import styles from "./AddToDo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.addInput}
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input className={styles.addInput} type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
