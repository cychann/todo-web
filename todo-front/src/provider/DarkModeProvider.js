import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const updateDarkMode = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateDarkMode(newDarkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      updateDarkMode(true);
    } else {
      setDarkMode(false);
      updateDarkMode(false);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
