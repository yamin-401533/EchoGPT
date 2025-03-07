import React, { useState } from 'react';
import styles from '../styles/TaskList.module.css';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.taskList}>
      <h2>Task List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className={styles.input}
      />
      <button onClick={handleAddTask} className={styles.addButton}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task}>
            {task}
            <button onClick={() => handleRemoveTask(index)} className={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;