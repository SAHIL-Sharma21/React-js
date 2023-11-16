import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

    const h2class = "text-white m-10";
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");


    //useRef() hook - kisi bhi cheez ka refrence lena hota hai tb useRef hook use krte hai
    const passwordRef = useRef(null);

    //defining copyPasswordToClipboard function
    const copyPasswordToClipboard = useCallback(() => {
        //useref hook to see the copy effect to user
        passwordRef.current?.select();
        //logic for copy password to clipboard
        window.navigator.clipboard.writeText(password);
    }, [password]);

    //now we use useCallback hook as number and character is dependent on the passGenereator function  we are using useCallback hook to optimize our code.
    // useCallback(fn, dependencies)  -> useCallback memoriesthe function jitna ho skre chahe poora kr sakta hai
    const passGenereator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str += "0123456789";
        if (characterAllowed) str += "!@#$%^&*_+=[]{}~`"

        for(let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass)


    }, [length, numberAllowed, characterAllowed, setPassword]);

    useEffect(() => {
      passGenereator();
    }, [length, numberAllowed, characterAllowed, passGenereator]);


  return (
    <>
      {/* <h1 className='text-4xl text-white text-center mt-6'>Password Generator</h1>
      <h2 className={h2class}>{length}</h2> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-800'>
        <h1 className='text-white text-lg text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          //using ref here
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
        <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={() => {
                 setNumberAllowed((prev) => !prev);
             }}
             //setNumberAllowed() >> we always get acces to previous value that is why we are using previous value to check and  uncheck.
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  )
}


export default App
