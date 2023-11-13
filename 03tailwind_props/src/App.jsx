import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  //another way to pass data in components is
  // const myObj = {
  //   name:"Sahil sharma",
  //   age:22
  // }

  // //passing array in components
  // const newArr = [1, 3, 5, 7, 9, 11, 13];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     
     {/* <Card  username = "Sahil Sharma" details = {myObj} myValue = {newArr}/> */}
     <Card username = "Sahil sharma" btnText = "Click Me"/>
     <Card  username= "Avinash Singh" btnText = "Shop Now"/>

    </>
  )
}

export default App
