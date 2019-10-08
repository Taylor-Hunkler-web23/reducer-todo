import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props, "in todo")
    return (

        <div className={props.todo.completed ? "completed" : ""} onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo.id })}>
            <h1>{props.todo.item}</h1>
        </div>
    )
}

export default Todo;