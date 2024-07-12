import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Password.css';
import pwbg from '../assets/photo/pwbg.jpg';
import '../global.css'

function Password() {
  return (
    <div className="password-container">
      <div className="left-column">
        <img src={pwbg} className="image" alt="Background" />
      </div>
      <div className="right-column">
        <div className="wrapper">
          <form action="#">
            <h2>Forgotten password</h2>
            <h4>Enter your email to receive instructions.</h4>

            <div className="input-field" id='input-field-pw'>
              <input type="email" required />
              <span>Enter Your E-mail</span>
            </div>

            <div className="center">
              <button type="submit">Submit</button>
            </div>

            <div className="register">
              <Link to="/SignUp">Create new account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
