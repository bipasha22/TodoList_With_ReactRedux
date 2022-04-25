import { createSlice } from '@reduxjs/toolkit';


export const todoSlider = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            {id: 1,content:"Buy household items"},
            {id: 2,content:"Go to GYM"}
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            let newTodoList = {
                id: Math.random(),
                content: action.payload.newContent
            }
            state.todoList.push(newTodoList);
        },
        deleteTodo: (state, action) =>{
            let { todoList } = state;
            state.todoList = todoList.filter((item)=>
                item.id !== action.payload.id
            );
        },
        editTodo: (state, action) =>{
            let { todoList } = state;
            state.todoList = todoList.map((item)=>
            item.id === action.payload.id ? action.payload : item);
        }
    },
})


export const { addTodo, deleteTodo, editTodo } = todoSlider.actions
export default todoSlider.reducer;
