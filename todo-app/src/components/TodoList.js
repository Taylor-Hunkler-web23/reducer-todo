import React from 'react';
import Todo from './Todo.js'

const TodoList = props => {
    console.log(props, "in list")
    return (
        <div>
            
            <h1>{props.items}</h1>
            {props.state.todos.map(todo => (
                <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
            ))}

        </div>
    )
}

export default TodoList;