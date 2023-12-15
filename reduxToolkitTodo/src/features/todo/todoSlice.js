//making slice/ reducers in this file....todoSlice.js

//nanoid is used to genereate unique id,
import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state in store ---like store initially kaise dikhega
// initial state can be object and arrays 
const initialState = {
    //todos  have array and in which there is object
    // todos: [{ id: 1, text: "Hello todo" }],
    todos: []
};

//now making slice ----reducers se bada---reducers is just an functionality.
// createSlice mei zadatr objects hi hote hai 
export const todoSlice = createSlice({
    //name property hamesha rahega and 2nd value is initialState and making reducers
    name: 'todo',
    initialState,
    reducers: {
        //addTodo method in reducers
        addTodo: (state, action) => {
            //making new todo
            const todo = {
                id: nanoid(), //making id with nanoid method we will get unique ids.
                text: action.payload, //we get text by action.payload method. &payload is an object
            };
            //pushing new todo value to state so we will use state
            state.todos.push(todo); //we are pushing new todo to todos array.
        },
        //making remove functioanlity
        removeTodo: (state, action) => {
            //taking id and filtering out the id which is matched
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        //updating functionality
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? action.payload : todo);
        },
    },
});


//exporting reducres functionality  - indiviual functionality will be useful in component
export const { addTodo, removeTodo } = todoSlice.actions;

//our store need all the reducers to work thats why we are exporting drfault all the reducers.
export default todoSlice.reducer;
