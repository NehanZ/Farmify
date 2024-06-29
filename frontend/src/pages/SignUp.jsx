import React from 'react'
import './styles/SignIn.css';
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <body>
          <div class="wrapper">
            <form action="#">

                <h2>Sign Up</h2>

                <div class="input-field">
                    <input type="text" placeholder='Full Name' required></input>
                </div>

                <div class="input-field">
                    <input type="email" placeholder='E-mail' required></input>
                </div>

                <div class="input-field">
                    <input type="text" placeholder='Address' required></input>
                </div>

                <div class="input-field">
                    <input type="tel" placeholder='Phone Number' required></input>
                </div>

                <div class="input-field">
                    <input type="password" placeholder='Password' required></input>
                </div>

                <div class="input-field">
                    <input type="password" placeholder='Confirm Password' required></input>
                </div>

                <div class="center">
                    <button type="submit">Create Account</button>
                </div>

                <div class="account">
                    <p>You have an account? <Link to="/SignIn">Log in</Link></p>
                </div>
                
            </form>
          </div>    
      </body>
    </div>
  )
}

export default SignUp