import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import Signupbg from '../../assets/photo/signupbg.jpg';
import '../../global.css';
import { auth, db } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const tempuserRef = collection(db, "tempuser");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(tempuserRef, {
        user: username,
        email: user.email,
        password: password,
        userId: user.uid,
      });

      alert('Sign-up successful!');
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='signupcontainer'>
      <div className='left-column'>
        <img src={Signupbg} className="image" alt="Background" />
      </div>
      <div className='right-column'>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            {error && <p className="error">{error}</p>}

            <div className="input-field">
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
              <span>Username</span>
            </div>

            <div className="input-field">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <span>Email</span>
            </div>

            <div className="input-field">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <span>Password</span>
              <label className="show-password">
                <input 
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                
              </label>
            </div>

            <div className="input-field">
              <input 
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
              <span>Confirm Password</span>
              <label className="show-password">
                <input 
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                
              </label>
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
