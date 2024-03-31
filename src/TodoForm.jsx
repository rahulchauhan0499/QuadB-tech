import React, { useState } from "react";

function TodoForm({ addTask }) {
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== "") { // Check if newTask is not empty
            addTask(newTask);
            setNewTask("");
        }
    };

    return (
        <div className="todoform">
            <input
                type="text"
                placeholder="Add a task"
                value={newTask}
                onChange={handleInputChange}
                required
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TodoForm;
