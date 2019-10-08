import React, {useState, useReducer} from 'react';
import {initialState, reducer} from './reducers/Reducer.js'
import './App.css';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'

function App() {

  const [state, dispatch] =useReducer (reducer, initialState)
  console.log (state, "app")
  return (
    <div className="App">
 <h1>Todo</h1>
 <TodoList dispatch={dispatch} state={state} />
<TodoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
