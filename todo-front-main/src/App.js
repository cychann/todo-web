import DarkModeProvider from "provider/DarkModeProvider";
import "./App.css";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <DarkModeProvider>
      <TodoPage />
    </DarkModeProvider>
  );
}

export default App;
