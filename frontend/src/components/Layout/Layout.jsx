import React from 'react'
import Header from '../Header/Header'
import Routers from '../../route/Routers'
import Footer from '../Footer/Footer'
import "./Layout.css"


const Layout = () => {
  return (<>
  <div className='page-container'>
    <div className='content-wrap'>
        <Header/>
        <Routers/>
        </div>
        <Footer/>
        </div>
    </>)
}

export default Layout