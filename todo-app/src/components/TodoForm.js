import React, { useState, UserReducer } from 'react';
import { initialState, reducer } from '../reducers/Reducer.js'

const TodoForm = (props) => {
    console.log(props, 'p')

    const [todo, setTodo] = useState('')

    const handleChange = event => {
        setTodo(event.target.value);
    }


    const handleSubmit = event => {
        event.preventDefault();
        props.dispatch({ type: 'ADD_TODO', payload: todo });
    }

    const clearCompleted = event => {
        event.preventDefault();
        props.dispatch({ type: "TODO_COMPLETED" })
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    name="todo"
                    placeholder="Add todo"
                    onChange={handleChange}
                />
                <button type='submit'>Add</button>

                <button onClick={clearCompleted}>Clear</button>



            </form>



        </div>


    )

}

export default TodoForm;