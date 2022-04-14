import { createStore } from "redux";

//actions type
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

//actions
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
}
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
};

const intialState = {
    todos: [],
};

//reducer
const TodoReduser = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state,todos: [...state.todos, action.payload] }
        case DELETE_TODO:
            return { ...state,todos:[...state.todos.filter((item, index) => index !== action.payload ) ]}
        default:
            return state;
    }
}

export const store = createStore(TodoReduser);
