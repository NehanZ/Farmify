import React from 'react'
import './styles/SignUp.css';
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <body>
            <div className='signupcontainer'>
                <img
                src="https://images.pexels.com/photos/2786784/pexels-photo-2786784.jpeg?auto=compress&cs=tiny&w=srgb1260&h=750&dpr=1"
                className="image"
                alt="Background"/>

                <div class="text-block">
                    <p>Join our community for exclusive tips, updates, and resources to grow your farm success!</p>
                    <button>Explore</button>
                </div>

                <div className="wrappersignup">
                    <form action="#">
                        <h2>Farmify</h2>

                        <div className="input-field">
                            <input type="text" placeholder='Full Name' required></input>
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder='E-mail' required></input>
                        </div>

                        <div className="input-field">
                            <input type="tel" placeholder='Phone Number' required></input>
                        </div>

                        <div className="input-field">
                            <input type="password" placeholder='Password' required></input>
                        </div>

                        <div className="input-field">
                            <input type="password" placeholder='Confirm Password' required></input>
                        </div>

                        <div className="center">
                            <button type="submit">Create Account</button>
                        </div>

                        <div className="account">
                            <p>You have an account? <Link to="/SignIn">Log in</Link></p>
                        </div>
                        
                    </form>
                </div>    
            </div>
        </body>
    </div>
  )
}

export default SignUp