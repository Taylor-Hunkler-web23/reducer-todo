export const initialState = {

    todos: [
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
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]

            }

        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }

                    } else {
                        return todo;
                    }
                })

            }

        case 'TODO_COMPLETED':
            return {
                ...state, todos: state.todos.filter(todo =>
                    !todo.completed)
            };
        default:
            return {
                ...state,
                todos: [...state.todos]
            }
    }
}
