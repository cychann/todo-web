import React from "react";
import styles from "./Todo.module.css";

export default function Todo({ todo, handleUpdateTodo }) {
  const { _id, isChecked, content } = todo;

  const handleToggleTodo = async () => {
    const updatedTodo = {
      _id,
      isChecked: !isChecked,
    };
    await handleUpdateTodo(updatedTodo);
  };

  return (
    <li className={styles.layout}>
      <input
        type="checkbox"
        id={`todo-${_id}`}
        checked={isChecked}
        onChange={handleToggleTodo}
      />
      <label htmlFor={`todo-${_id}`}>
        {isChecked ? <del>{content}</del> : content}
      </label>
    </li>
  );
}
