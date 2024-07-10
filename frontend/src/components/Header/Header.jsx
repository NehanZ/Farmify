import React from 'react'
import "./Header.css"
import logo_icon from '../../assets/logo.jpg'

const Header = () => {
  return (
    <div className='navbar'>

      <img src={logo_icon} alt='' className='logo'/>

      <ul className='ull'>
        <li className='uli' href=''>Home</li>
        <li className='uli' href=''>community</li>
        <li className='uli' href=''>Volunteering</li>
      </ul>


      <div className='bt-a'>

      <button href='' className='bt1'>Sign in</button>
      <button href='' className='bt2'>Sign Up</button>

      </div>


    </div>
  )
}

export default Header