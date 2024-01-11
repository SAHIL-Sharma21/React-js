
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
//importing authservice from the appwrite
import authService from './appwrite/auth'
//importing 2 method login and logout
import {login, logout} from './store/authSlice'
//importing outlet from react router dom
import {Outlet} from 'react-router-dom'
import {Header, Footer} from './components/index'
import './App.css'

function App() {
  
  //taking env file variable : this method is used when we have created our app with CRA - create react App
  // console.log(process.env.REACT_APP_APPWRITE_URL); //giving error: process is not defined

  //logging env in vite app
  // console.log(import.meta.env.VITE_APPWRITE_URL);

//initially we make loading state to show wheter user logged in or not >> it is a goood practice as in backend sometimes network request takes time
  const [loading, setLoading] = useState(true); //initially loading will be true

  //we need dispatch to send data
  const dispatch = useDispatch();

//taking useEffect and our app will ask the service wheter the user is logged in?
useEffect(() => {
  //we have asked authService to getCurrentUser and it is returing promise so we are handling it with .then and .finally alwayss run in the code
  authService.getCurrentUser()
                .then((userData) => {
                  if(userData) { //if user is present
                    dispatch(login({userData}));
                  } else {
                    dispatch(logout()); //if we didn't get the userData then we will dispatch logout.
                  }
                })
                .catch(console.log('user is not present!!'))
                .finally(() => setLoading(false));
}, []);


//conditional rendering
return !loading ? 
<>
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet />   */}
        </main>
        <Footer />
    </div>
  </div>
</> 
: null; 


}

export default App
