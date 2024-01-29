// import React, {useId} from 'react'

// function Select({
//     options,
//     label,
//     className = "",
//     ...props
// }, ref) {

//     //making id
//     const id = useId();


//   return (
//     <>
//         <div className='w-full'>
//             {label && <label htmlFor={id}></label>}
//             <select {...props} id={id} ref={ref} className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
//                 {/* //options hme array se milega toh we have to loop through it  */}
//                 {/* we will optionally loop on options if there is no option available then our app will crash  */}
//                 {options?.map((option) => (
//                     <option key={option} value={option} >
//                         {option}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     </>
//   )
// }

// //2nd way of exporting forward ref in react .
// export default React.forwardRef(Select)

import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)