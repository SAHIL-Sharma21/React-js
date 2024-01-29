// import React from 'react'
// //we will conditionally render header and show logout btn when user is logged in
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link, useNavigate } from 'react-router-dom' //useNavigate is used to forcefully navigate
// import { useSelector } from 'react-redux'



// function Header() {

//   //checking user is there
//   const authStatus = useSelector((state) => state.auth.status); //iske under auth ka status mil jayega yeh hme authSkice mei milega


//   const navigate = useNavigate();

//   //making navItems in array this is used in production grade application to use this we have to loop through this.
//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     },
//     {
//      name: "Login",
//      slug: "/login",
//      active: !authStatus
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus
//     },
//     {
//       name: "All-Post",
//       slug: "/all-post",
//       active : !authStatus, //we are asking from authStatus wheter it's active or not
//     },
//     {
//       name: "Add-Post",
//       slug: "/add-post",
//       active: !authStatus
//     }
//   ];


//   //condtional render krenge jo active rahgea wohi show karega...

//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <Container>
//         <nav className='flex'>
//           {/* //iss navb ke ander sara kaam krenge  */}
//           <div className='mr-4'>
//             <Link to={"/"}> <Logo /> </Link>
//           </div>
//           {/* here we have ul and we will loop it  */}
//           <ul className='flex ml-auto'>
//             {/* starting javaScript here  */}
  
//             {/* if navItems.active is true the we will show component other we show null. navigate is work as same as link use to navigate and it take url as a argument  */}
//             {navItems.map((item) => 
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                   onClick={() => navigate(item.slug)}
//                   className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                   >{item.name}</button>
//                 </li>
//               ) : null
//             )}

//             {/* dislpay logout or not by this logic >> if authStatus is true then (logoutBtn will show otherwise not) will executes basic react syntaxx  */}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}

//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header


import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header

