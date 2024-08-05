const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8090";

export const getTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Failed to add todo:", error);
    throw error;
  }
};

export const updateTodo = async (todoId, updatedTodo) => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    if (!response.ok) throw new Error("response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Failed to update todo:", error);
    throw error;
  }
};
