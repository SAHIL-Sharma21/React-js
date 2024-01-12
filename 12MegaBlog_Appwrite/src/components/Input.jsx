import React, {forwardRef, useId} from 'react'
//making input filed seprately 
//using forward ref to acces its state value in other component >>cso this is new syntax and we pass paramters like label and all and 2nd paramter is ref. this ref is very important to give.

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    //input mei ref attributes dena hai jo user dega and uska access hme parent component mei mil jayega
    
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}
            >
            {label}
            </label> }
            
            <input 
            type={type} 
            className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input