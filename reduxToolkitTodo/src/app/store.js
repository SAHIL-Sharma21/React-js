//making store with configureStore method which we will get from reduxjs/toolkit;
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

//exporting the varaiable using configureStore method which always takes object.
export const store = configureStore({
    reducer: todoReducer //all thereducers are here.
});

