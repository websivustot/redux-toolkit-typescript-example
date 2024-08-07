import { createSlice } from "@reduxjs/toolkit";
import { Todo } from './types';

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {            
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                complited: false,
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodo: (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            if (toggledTodo) {
                toggledTodo.complited = !toggledTodo.complited;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;