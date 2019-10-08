import React from 'react';
import Todo from './Todo.js'

const TodoList = props => {
    console.log (props)
    return (
        <div>
            <h1>List</h1>
            <h1>{props.items}</h1>
            {props.state.todos.map(todo => (
                <Todo key={todo.id}  todo={todo} />
            ))}

        </div>
    )
}

export default TodoList;