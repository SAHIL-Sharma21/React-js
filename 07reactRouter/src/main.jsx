import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//we will render RouterProvider to render our app  in this router we have to pass props to see this working 

//now we will make router 
//method 1
// const router = createBrowserRouter([
//   {
//     //this "/" is the main route when will render and after that tere are children
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       }, 
//       {
//         path: 'about', // "/ " is already there and we only need to give path name
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);

//Method 2 --createBrowserRouter will alwyas be same.
const router = createBrowserRouter(
  //by createRoutesByElements
  //we are nesting the home,about routes in layout its the main feature and we can route further 
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
        <Route  path='' element = {<Home />}/>
        <Route path='about' element = {<About />} />
        <Route path='contact' element = {<Contact />} />
        <Route path='user/:userId' element = {<User />} />
        <Route 
        //using loader in route we can fetch api in loader and it is very fast then useEffect
        // loader={() => {
        //   //we can fetch here from api and get data.
        // }}
        loader={githubInfoLoader}
        path='github' 
        element = {<Github />}
         />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
