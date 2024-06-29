import React from 'react'
import './styles/Password.css'
import './SignUp.jsx'
import {Link} from 'react-router-dom'


function Password() {
  return (
    <div>
        <body>
            <div class="wrapper">
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
    </body>
    </div>
  )
}

export default Password