import React from 'react'
import "./footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='main-footer' >
      <div className='topic'>
            <div className='t-raw'>
              <h6>Follow Us</h6>
              <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              <a href='https://web.facebook.com/?_rdc=1&_rdr'></a>
            </div>
            </div>
        <div className='container'>
          <div className='row'>
            {/*coloumn*/}
            <div className='col'>
            <h6>About us</h6>
              <ul className='list-unstyled'>
                
              </ul>
                 
             </div>
                
            {/*coloumn*/}
            <div className='col'>
            <h6>Our Resourses</h6>
              <ul className='list-unstyled'>
                
              </ul>
                 
             </div>
            {/*coloumn*/}
            <div className='col'>
            <h6>Help</h6>
              <ul className='list-unstyled'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
                 
             </div>
             {/*coloumn*/}
             <div className='col'>
            <h6>Terms of use</h6>
              <ul className='list-unstyled'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
                 
             </div>
          </div>
        </div>
    </div>
  )
}

export default Footer