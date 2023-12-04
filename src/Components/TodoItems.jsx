import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItetm";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  // const deleteItem = contextObj.deleteItem;

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
