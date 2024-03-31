import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [todos, setTodos] = useState([]);

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

    return (
        <div className="todo">
            <h1>Todo List Assignment</h1>
            <TodoForm addTask={addTask} />
            {todos.length > 0 && (
                <div className="todo-des">
                    <h3>Task List</h3>
                    <TodoList
                        todos={todos}
                        deleteTask={deleteTask}
                        markTaskAsDone={markTaskAsDone}
                    />
                    <button onClick={() => setTodos([])} className="clear-button">Clear All</button>
                </div>
            )}
        </div>
    );
}

export default Todo;
