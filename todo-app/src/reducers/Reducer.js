export const initialState ={

   todos:  [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      
},
{
    item: 'Learn about something else',
    completed: false,
    id: 38929875892
  
}
    ]
}
export const reducer = (state, action) => {
switch (action.type) {
    default:
        return {
            ...state,
            todos: [...state.todos]
        }
}
}
