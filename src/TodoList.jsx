import React from "react";

function TodoList({ todos, deleteTask, markTaskAsDone }) {
    return (
        <ul className="todolist">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={todo.isDone ? { textDecorationLine: "line-through",textDecorationColor:"red"} : {}}>
                        {todo.task}
                    </span>
                    <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    <button onClick={() => markTaskAsDone(todo.id)} className="mark">Mark as Done</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
