import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import Signinbg from '../../assets/photo/signinbg.jpg';
import '../../global.css';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, username, password);
      alert('Sign-in successful!');
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="left-column">
        <img src={Signinbg} className="image" alt="Background" />
      </div>
      <div className="right-column">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>

            {error && <p className="error">{error}</p>}

            <div className="input-field">
              <input 
                type="email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
              <span>Email</span>
            </div>

            <div className="input-field">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <span>Password</span>
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
