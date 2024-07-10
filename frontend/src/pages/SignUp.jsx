import React from 'react';
import './styles/SignUp.css';
import { Link } from 'react-router-dom';
import Signupbg from '../assets/photo/signupbg.jpg';

function SignUp() {
  return (
    <div className='signupcontainer'>
      <div className='left-column'>
        <img src={Signupbg} className="image" alt="Background"/>
        {/* <div className="text-block">
          <p>Join our community for exclusive tips, updates, and resources to grow your farm success!</p>
          <button>Explore</button>
        </div> */}
      </div>
      <div className='right-column'>
        <div className="wrapper">
          <form action="#">
            <h2>Sign Up</h2>
            <div className="input-field">
              <input type="text"  required />
              <span>Username </span>
            </div>
            <div className="input-field">
              <input type="text"  required />
              <span>E-mail </span>
            </div>
            <div className="input-field">
              <input type="tel"  required />
              <span>Phone Number </span>
            </div>
            <div className="input-field">
              <input type="password"  required />
              <span>Password </span>
            </div>
            <div className="input-field">
              <input type="password"  required />
              <span>Confirm Password </span>
            </div>
            <div className="center">
              <button type="submit">Create Account</button>
            </div>
            <div className="account">
              <p>You have an account? <Link to="/SignIn">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
