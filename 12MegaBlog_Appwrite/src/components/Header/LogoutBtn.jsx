// import React from 'react'
// import {useDispatch} from 'react-redux'
// //importing logout slice and reducers from store and authslice
// import {logout} from '../../store/authSlice'
// import authService from '../../appwrite/auth'

// function LogoutBtn() {

//     const dispatch = useDispatch();

//     //making logout btn functionality
//     const logoutHandler = () => {
//         authService.logout()
//             .then(() => dispatch(logout()))
//             .catch("user didn't logout");
//     }

//   return (
//     <button 
//     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//     onClick={logoutHandler}
//     >Logout</button>
//   )
// }

// export default LogoutBtn

import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn