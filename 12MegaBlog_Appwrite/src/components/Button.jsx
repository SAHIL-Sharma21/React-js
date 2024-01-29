// import React from 'react'

// //making common button component and will give parameters
// //children wohi jo bhi text pass hoga wohi text button ka hoga!!
// //type and bgcolor mei default value hai age koi user value dega toh change ho jayega wrna same default rahgea!!

// function Button(
//     {
//         childen,
//         type = 'button',
//         bgColor = 'bg-blue-600',
//         textColor = 'text-white',
//         className = '',
//         ...props
//     }
// ) 
// //injecting variable in button below from the user input values
// // ...props aur bhi attributes ho skte hai toh unko spread kr liya
// {
//   return (
//     <button 
//     className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
//     {...props}
//     >
//         {childen}
//     </button>
//   )
// }

// export default Button

import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}