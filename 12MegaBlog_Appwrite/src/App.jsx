
import './App.css'

function App() {
  
  //taking env file variable : this method is used when we have created our app with CRA - create react App
  // console.log(process.env.REACT_APP_APPWRITE_URL); //giving error: process is not defined

  //logging env in vite app
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>Blog website with Appwrite</h1>
    </>
  )
}

export default App
