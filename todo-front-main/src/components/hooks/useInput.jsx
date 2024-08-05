import { useState } from "react";

export function useInput(initialValue = "") {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    handleInputChange,
    setInputValue,
  };
}
