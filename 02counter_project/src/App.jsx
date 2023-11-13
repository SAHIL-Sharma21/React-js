import { useState } from 'react'
import './App.css'

function App() {
  
  // let counter = 5;
  let [counter, setCounter]  = useState(0);

  //defining addValue function
  const addValue = () => {
    // console.log('Value Added', Date.now());
    // counter = counter + 1;
    // console.log('Clicked', counter);
    
    //adding feature that the count dont go above 20
    if(counter < 20) setCounter(counter + 1);
    // counter < 20 ? setCounter(counter + 1) : alert('Memeroy Full');
  }

  //logic for removing the value from the counter variable.
  const removeValue = () => {
    // counter = counter - 1;
    // setCounter(counter-1);
    //adding feature that the count dont go in negative value
    if( counter > 0) setCounter(counter - 1);
    
  }

  return (
    <>
     <h1>Counter project and learning Hooks</h1>
     <h2>Counter value: {counter}</h2>

    {/* here we are giving refrence of the function in onClick method because we have execute this function when user click on this button if we write addValue() then it will execute directlty  */}
     <button onClick={addValue}>
        Add Value
     </button>
     <br />
     <button onClick={removeValue}>
       Remove Value
     </button>
    </>
  )
}

export default App
