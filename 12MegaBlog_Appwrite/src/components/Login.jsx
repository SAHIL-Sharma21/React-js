// import React, {useState} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import {login as authLogin} from '../store/authSlice';
// import {Input, Button, Logo} from './index'
// import { useDispatch } from 'react-redux';
// import authService from '../appwrite/auth';
// import {useForm} from 'react-hook-form';


// //making this component with useFrom by react hook form library.

// function Login() {

//         const navigate = useNavigate();
//         const dispatch = useDispatch();
//         const [error, setError] = useState("");
//         const {register, handleSubmit} = useForm();

//         //making functionality of login
//         const login = async(data) => {
//             setError(""); //clearing out all the errors.
//             //wrapping in try Catch block
//             try {
//             const session = await authService.login(data); //sending data to login function in authservice
//             //if seesion hai toh user logged in hai wrna logged in nahi hai
//             if(session) {
//                 //we need to get userData from the getUserData method
//                 const userData = await authService.getCurrentUser();
//                 //if hamre pass userData aata hai toh hm data dispatch kr denge
//                 if(userData) dispatch(authLogin(userData));
//                 //agr user logged in hai toh usko navigate kr denge
//                 navigate("/"); //to root/home   >> naviagte programitically automatic naviagte kr deta hai whereas Link pr click krna padta hai..
//             }


//             } catch (error) {
//                 //if we get error then we set the error by setError function.
//                 setError(error.message);
//             }
//         }


//   return (
//     <>
//         <div className='flex items-center justify-center w-full'>
//             <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//                 <div className='mb-2 flex justify-center'>
//                         <span className='inline-block w-full max-w-[100px]'>
//                             <Logo width='100%'/>
//                         </span>
//                 </div>

//                 <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//                 <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/signup"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//                 </p>
//                 {/* {we will display error if there is error} */}
//                 {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

//                 {/* {yaha se form functionality hai } */}
//                 {/* handleSubmit is an event/method of react Hook form we have to use this only and we need to pass our creatured feature function in its parameter otherwise it will give error. */}
//                 <form onSubmit={handleSubmit(login)} className='mt-8'>
//                     <div className='space-y-5'>
//                         <Input 
//                         label= "Email: "
//                         placeholder= "Enter your Email"
//                         type="email"
//                         //we have to always use {...register("unique_name") >> key, {} > object) //() it will have unique name like key value} and spread it otherwise when we will use register in some other field it will override it.
//                         {...register("email", {
//                             required: true,
//                             validate: {
//                                 matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
//                                 test(value) ||  //it will test for value the email pattern.
//                                 "Email address must be a valid address", //this above thing is regex >> matching the pattern
//                             },
//                         })}
//                         />
//                         {/* password field  */}
//                         <Input 
//                         label= "Password:"
//                         placeholder= "Enter your password"
//                         type= "password"
//                         {...register("password", {
//                             required: true,
//                         })}
//                         />

//                         {/* placing button  */}

//                         <Button 
//                         type="submit"
//                         className="w-full" 
//                         >
//                             Sign in 
//                         </Button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     </>
//   )
// }

// export default Login

import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login