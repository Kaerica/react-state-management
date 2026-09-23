
import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();

  const addTask = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) return;

    dispatch({
      type: "add",
      payload: trimmedTask,
    });

    setTask("");
  };

  return (
    <div
      className={`${styles.container} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <div className={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") addTask();
          }}
          placeholder="Enter a task..."
        />

        <button onClick={addTask} disabled={!task.trim()}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((t) => (
            <li key={t.id} className={styles.taskItem}>
              <span>{t.text}</span>

              <button
                onClick={() =>
                  dispatch({
                    type: "remove",
                    payload: t.id,
                  })
                }
                aria-label={`Remove ${t.text}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;