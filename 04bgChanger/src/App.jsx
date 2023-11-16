import { useState } from "react"
import Navbar from "./components/Navbar";


function App() {
 
 const [color, setColor] = useState("#BAB86C");
  
  const btnClass = "outline-none px-4 py-1 text-white shadow-lg rounded-full";
  

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-end bottom-6 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md ">
            <button className={btnClass} style={{backgroundColor:"red"}} onClick={() => setColor("red")}>red</button>
            <button className={btnClass} style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
            <button className={btnClass} style={{backgroundColor:"green"}} onClick={() => setColor("green")}>green</button>
            <button className={btnClass} style={{backgroundColor:"olive"}} onClick={() => setColor("olive")}>olive</button>
            <button className={btnClass} style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>orange</button>
            <button className={btnClass} style={{backgroundColor:"lavender"}} onClick={() => setColor("lavender")}>lavender</button>
            <button className={btnClass} style={{backgroundColor:"grey"}} onClick={() => setColor("grey")}>grey</button>
            <button className={btnClass} style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>yellow</button>
          </div>
        </div>
     </div>
    // <>
    //   {/* <Navbar  logo={200}/> */}
    // </>

  )
}

export default App
