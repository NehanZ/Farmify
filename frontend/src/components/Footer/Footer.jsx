import React from 'react'
import "./footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='main-footer' >
      <div className='topic'>
            <div className='t-raw'>
              <h4>Follow Us</h4>
              <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              <a href='https://web.facebook.com/?_rdc=1&_rdr'></a>
            </div>
            </div>
        <div className='container'>
          <div className='row'>
            {/*coloumn*/}
            <div className='col'>
            <h4>About us</h4>
              <ul className='list-unstyled'>
                <li>wertyui</li>
                <li>ertyuio</li>
                <li>wertyuik</li>
              </ul>
                 
             </div>
                
            {/*coloumn*/}
            <div className='col'>
            <h4>Our Resourses</h4>
              <ul className='list-unstyled'>
                <li>wertyui</li>
                <li>wertyu</li>
                <li>dfghjkl</li>
              </ul>
                 
             </div>
            {/*coloumn*/}
            <div className='col'>
            <h4>Help</h4>
              <ul className='list-unstyled'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
                 
             </div>
             {/*coloumn*/}
             <div className='col'>
            <h4>Terms of use</h4>
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