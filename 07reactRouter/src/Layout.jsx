import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom' // we change the component where we have given outlet

function Layout() {
  return (
    <>
        <Header />
        {/* now will make it render dynamic component here  */}
        {/* header and footer same rahega baaki outlet wala change hota rahega. */}
        <Outlet /> 
        <Footer />
    </>
  )
}

export default Layout