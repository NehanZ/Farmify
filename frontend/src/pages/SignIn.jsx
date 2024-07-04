import React from 'react';
import './styles/SignIn.css';
import './SignUp.jsx';
import './Password.jsx';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="container">
      <img
        src="https://images.pexels.com/photos/2786784/pexels-photo-2786784.jpeg?auto=compress&cs=tiny&w=srgb1260&h=750&dpr=1" className="image" alt="Background"/>

      <div class="text-block">
        <p>Join our community for exclusive tips, updates, and resources to grow your farm success!</p>
        <button>Explore</button>
      </div>

      <div className="wrapper">
        <form action="#">
          <h2>Farmify</h2>

          <div className="input-field">
            <input type="text" placeholder="Phone number, username, or email" required/>
          </div>

          <div className="input-field">
            <input type="password" placeholder="Password" required />
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
  );
}

export default SignIn;
