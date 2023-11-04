import React from 'react';
import './register.css';

function Register() {
  return (
    <div className="register-container">
      <h2>Register for Grocery Delivery</h2>
      <form action="register.html" method="post">
        <label htmlFor="email_or_phone">Email or Phone:</label>
        <input type="text" name="email_or_phone" required placeholder="Enter your email or phone number" />

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" required placeholder="Choose a username" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required placeholder="Create a password" />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
