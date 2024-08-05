import React, { useContext } from "react";
import ReactLogo from "assets/images/logo.svg";
import Image from "components/Common/Img/Image";
import PageTitle from "components/Common/PageTitle/PageTitle";
import TodoList from "components/TodoPage/TodoList/TodoList";
import TodoInput from "components/TodoPage/TodoInput/TodoInput";

import { DarkModeContext } from "provider/DarkModeProvider";
import { useTodos } from "hooks/useTodos";

import styles from "./TodoPage.module.css";

export default function TodoPage() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  const { todoList, handleAddTodo, handleUpdateTodo } = useTodos();

  return (
    <main className={styles.layout}>
      <header className={styles.header}>
        <PageTitle />
        <button className={styles.toggleButton} onClick={toggleDarkMode}>
          <Image src={ReactLogo} alt="React logo" width={50} height={50} />
        </button>
      </header>
      <TodoList todoList={todoList} handleUpdateTodo={handleUpdateTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </main>
  );
}
