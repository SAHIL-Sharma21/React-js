// //making authentication layout >> it's a mechanisim to protect pages and routes.
// import React, {useEffect, useState} from 'react';
// import {useSelector} from 'react-redux';
// import {useNavigate} from 'react-router-dom';

// // NOTE: file and function name can be different >> here we are using different function name.

// export default function Protected({children, authentication = true}) {

//     const navigate = useNavigate();
//     const [loader, setLoader] = useState(true);
//     const authStatus = useSelector(state => state.auth.status);

//     //useEffect hi batyega ki hme user ko Login pr bajna hai ya Signup pr bejna hai ya Home page pr bejna hai
//     useEffect(() =>{
//         //authentication is alwyas true and we are just checking that authStatus is no qeual to authentication if both true && true => True then user will navigate to /login.
//         if(authentication && authStatus !== authentication){
//             navigate("/login");
//         } else if(!authentication && authStatus !== authentication){
//             navigate("/");
//         }
//         setLoader(false);

//         //it can be simple as this
//         // if(authStatus === true){
//         //     navigate("/");
//         // } else if(authStatus === false) {
//         //     navigate("/login");
//         // }
//     },[authStatus, navigate, authentication]);

//     //agr loader true hai toh h1 mei loading display krdo nhi toh children display krdo.
//   return loader ? <h1>Loading....</h1> : <>{children}</> 
// }

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}