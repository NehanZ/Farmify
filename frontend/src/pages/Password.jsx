import React from 'react'
import './styles/Password.css'
import './SignUp.jsx'
import {Link} from 'react-router-dom'


function Password() {
  return (
    <div>
        <body>
            <div className='passwordcontainer'>
                <img
                src="https://images.pexels.com/photos/2786784/pexels-photo-2786784.jpeg?auto=compress&cs=tiny&w=srgb1260&h=750&dpr=1"
                className="image"
                alt="Background"/>

                <div class="text-block">
                    <p>Join our community for exclusive tips, updates, and resources to grow your farm success!</p>
                    <button>Explore</button>
                </div>

                <div class="wrapperpassword">
                    <form action="#">
                        <h2>Forgotten password</h2>
                        <h4>Enter your email to receive instructions.</h4>

                        <div class="input-field">
                            <input type="email" placeholder='Enter your email' required></input>
                        </div>

                        <div class="center">
                            <button type="submit">Submit</button>
                        </div>
                
                        <div class="register">
                            <Link to='/SignUp'>Create new account</Link>
                        </div>
                    </form>
                </div>
            </div>    
    </body>
    </div>
  )
}

export default Password