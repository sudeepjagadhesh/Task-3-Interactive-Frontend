import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login to Grocery Delivery</h2>
      <form action="login.html" method="post">
        <label htmlFor="email_or_phone">Email or Phone:</label>
        <input type="text" name="email_or_phone" required placeholder="Enter your email or phone number" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required placeholder="Enter your password" />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
