// in this example we are sending data to user setUser which is in our userContextProvider.jsx


import React, { useState, useContext } from 'react' //importing useContext Hook here to use in this component
import UserContext from '../context/userContext' //we are also importing our UserContext js file.

function Login() {

    //using state as taking input\
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext); //using useContext hook to get the props which is in UserContext
//creating handle submit
const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName, password}); //pasing userName and Password to setUser which is in UserContext
}

  return (
    <div>
        <h2>Login</h2>
        <input 
         type="text"
         placeholder='username'
         value={userName}
         onChange={(e) => setUserName(e.target.value)}
         />
         {" "}
        <input 
         type='pasword' 
         placeholder='password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
        <button type='submit' onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login