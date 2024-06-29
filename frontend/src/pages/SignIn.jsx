import React from 'react'
import './styles/SignIn.css';
import './SignUp.jsx'
import './Password.jsx'
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
      <body>
        <div class="wrapper">
          <form action="#">

              <h2>Sign In</h2>

              <div class="input-field">
                  <input type="text" placeholder='Phone number,username or email' required></input>
              </div>

              <div class="input-field">
                  <input type="password" placeholder='Password' required></input>
              </div>

              <div class="forget">
                <label for="remember">
                  <input type="checkbox" id="remember"></input>
                  <p>Remember me</p>
                </label>
                <Link to='/Password'>Forgot password?</Link>
              </div>

              <div class="center">
                <button type="submit">LogIn</button>
              </div>
              
              <div class="register">
                <p>Don't have an account? <Link to="/SignUp">Register</Link></p>
              </div>

          </form>
        </div>    
      </body>
    </div>
  )
}

export default SignIn