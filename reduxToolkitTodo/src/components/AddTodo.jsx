import React, { useState } from 'react'
//importing useDispatch from react redux
import {useDispatch} from 'react-redux';
//individual reducers ko leke ayenge jo hm dispatch mei use krenge.
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
   //AddTodo:- Store ke ander khuch add krna hai, add krenge hm dispatch se.
   
   //making states input and setInput
   const [input, setInput] = useState("");

   //using useDispatch below
    const dispatch = useDispatch();

    //making addTodoHandler method
    const addTodoHandler = (e) => {
        e.preventDefault();
        //using dispatch: dispatch ek reducer ko use krte hue store ke ander values mei changes krta hai.
        dispatch(addTodo(input)); //action.payload ki jagah sirf hm input bejenge.
        //making form empty after sending data.
        setInput("");//empty string
    }



  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo