import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//importing provider for react redux
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx';
import AllPost from "./pages/AllPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import Signup from "./pages/Signup.jsx";
import { AuthLayout, Login } from './components/index.js'

//making router and routes
const router = createBrowserRouter([
  { //root
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/login",
        element: ( //wraping in bracket to add multiple component
          <AuthLayout authentication={false}> //passing authentication as false to AuthLayout 
            <Login />
          </AuthLayout>
        ),
      }, 
      {
        path:"/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ) 
      },
      {
        path:"/all-post",
        element: (
          <AuthLayout authentication={" "}> //here authentication is true we need authentication to see all AllPost
            <AllPost />
          </AuthLayout>
        )
      },
      {
        path:"/add-post",
        element: (
          <AuthLayout authentication={" "}>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication={" "}>
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element: <Post />
      }
    ],
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
