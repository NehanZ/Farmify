import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SignIn.css';
import Signinbg from '../assets/photo/signinbg.jpg';
import '../global.css'

function SignIn() {
  return (
    <div className="signin-container">
      <div className="left-column">
        <img src={Signinbg} className="image" alt="Background" />
        {/* <div className="text-block">
          <p>Join our community for exclusive tips, updates, and resources to grow your farm success!</p>
          <button>Explore</button>
        </div> */}
      </div>
      <div className="right-column">
        <div className="wrapper">
          <form action="#">
            <h2>Sign In</h2>

            <div className="input-field">
              <input type="text" required />
              <span>User </span>
            </div>

            <div className="input-field">
              <input type="password"  required />
              <span>Password </span>
            </div>

            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <Link to="/Password">Forgot password?</Link>
            </div>

            <div className="center">
              <button type="submit">Log In</button>
            </div>

            <div className="register">
              <p>
                Don't have an account? <Link to="/SignUp">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
