import { useEffect, useState } from "react";
import { addTodo, getTodos, updateTodo } from "apis/todo";

export function useTodos() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodoList = async () => {
    try {
      const todosData = await getTodos();
      setTodoList(todosData);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      await addTodo(newTodo);
      await fetchTodoList();
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await updateTodo(updatedTodo._id, updatedTodo);
      await fetchTodoList();
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return { todoList, handleAddTodo, handleUpdateTodo };
}
