
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'


function App() {
 

  return (
    <UserContextProvider>
      {/* we can pass any componeny here and we get directly acces to UserContext Variables  */}
      <h1>Learning context/ State management in react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
