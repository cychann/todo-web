import React from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ todoList, handleUpdateTodo }) {
  return (
    <section className={styles.layout}>
      <ul className={styles.todo_ul}>
        {todoList.map((todo) => (
          <Todo
            todo={todo}
            key={todo._id}
            handleUpdateTodo={handleUpdateTodo}
          />
        ))}
      </ul>
    </section>
  );
}
