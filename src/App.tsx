
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import "./App.css";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <main className="main-content">
        <h1>Welcome to React App</h1>
        <p>
          Explore theme switching and task management
          with React.
        </p>

        <TaskManager />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;