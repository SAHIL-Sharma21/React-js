
// import { useEffect, useState } from 'react'
// import {TodoProvider} from './context'
// import {TodoForm, TodoItem} from './components/index'
// import './App.css'

// function App() {

//   const [todos, setTodos] = useState([]); //initially it will  be an empty array
//   //now writing functionalites of the todos ---: rember to write the exact same name as we made in context.
//   const addTodo = (todo) => {
//     //adding single todo
//     //if we use setTodos(todo); then it will delete all the previous todo and add only one todo. which we dont want ..
//     setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]); //adding new todo object with old todo using js concept spread operator.
//   };

//   //logic for update todo
//   const updateTodo = (id, todo) => {
//       setTodos((prev) = prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
//   };

//   //logic for delete todo
//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   //Business logic for toggle complete
//   //we are matching the values and then load full todo and which is completed we only change that
//   const toggleComplete = (id) => {
//       setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
//   };

//   //using useEffect hook to take all values before adding any todo
//   useEffect(() => {
//     //phele saari values leke ayenge through localStorage
//     // localStorage.getItem("todos"); //it will give string and we need to convert to json
//     const todos =  JSON.parse(localStorage.getItem("todos")); //converted to JSON

//     //cjecking if there is todos and it length is greater than 0 then we will setTodo
//     if(todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   //writing one more useEffect to set todos this is one of the approach
//   useEffect(() =>{
//     localStorage.setItem("todos", JSON.stringify(todos)); //converting object to strings but JSON.stringify method
//   }, [todos]);


//   return (
//     // wrapping below with TodoProvider  and giving values which we made in contexts 
//     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//             <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */}
//                         <TodoForm />
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         {todos.map( (todo) => (
//                           <div key={todo.id} className='w-full'>
//                             <TodoItem /> //error here i guess
//                           </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//     </TodoProvider>
//   )
// }

// export default App


import { useState, useEffect } from 'react'
import {TodoProvider} from './context/index'
import './App.css'
import {TodoForm, TodoItem} from './components/index'
// import {TodoItem} from './components/index'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App