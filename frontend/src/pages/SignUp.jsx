<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useState } from 'react';
import './styles/SignUp.css'
>>>>>>> Stashed changes

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log(form);
  };

  return (
<<<<<<< Updated upstream
    <div>SignUp</div>
  )
}
=======
    <div className='outside'>
      <div className='inside'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={form.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
    </div>
  );
};
>>>>>>> Stashed changes

export default SignUp;
