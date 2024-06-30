<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useState } from 'react';
import './styles/SignIn.css'
>>>>>>> Stashed changes

const SignIn = () => {
  const [form, setForm] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log(form);
  };

  return (
<<<<<<< Updated upstream
    <div>SignIn</div>
  )
}
=======
    <div className='outside'>
    <div className='inside'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Phone Number</label>
          <input type="text" name="emailOrPhone" value={form.emailOrPhone} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
    </div>
  );
};
>>>>>>> Stashed changes

export default SignIn;
