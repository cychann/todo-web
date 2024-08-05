import { useInput } from "components/hooks/useInput";
import React, { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const { inputValue, handleInputChange, setInputValue } = useInput("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    try {
      await handleAddTodo({ content: inputValue });
      setInputValue("");
      alert("Todo 추가!");
    } catch (error) {
      console.error("Todo 추가 중 오류 발생:", error);
      alert("Todo 추가 중 오류 발생");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          disabled={isSubmitting}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
