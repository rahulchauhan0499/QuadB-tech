import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        console.log("Stored Todos:", storedTodos);
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("Todos saved to localStorage:", todos);
    }, [todos]);

    const addTask = (task) => {
        setTodos((prevTodos) => [...prevTodos, { task, id: uuidv4(), isDone: false }]);
    };

    const deleteTask = (taskId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== taskId));
    };

    const markTaskAsDone = (taskId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === taskId ? { ...todo, isDone: true } : todo
            )
        );
    };

    const clearAllTasks = () => {
        setTodos([]);
    };

    return (
        <div>
            <h1>Todo List Assignment</h1>
            <TodoForm addTask={addTask} />
            {todos.length > 0 && (
                <div>
                    <h3>Task List</h3>
                    <TodoList
                        todos={todos}
                        deleteTask={deleteTask}
                        markTaskAsDone={markTaskAsDone}
                    />
                    <button onClick={clearAllTasks}>Clear All</button>
                </div>
            )}
        </div>
    );
}

export default TodoApp;
