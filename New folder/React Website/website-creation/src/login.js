import React, { useState } from 'react';
import './login.css';

function Login({ switchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    // Check if the username exists and the password is correct
    const isLoginSuccessful = true; // Replace with actual login logic

    if (isLoginSuccessful) {
      setSuccessMessage('Login successful');
      // Redirect to the user's dashboard or do what's necessary
    } else {
      setErrorMessage('Login failed. Check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{' '}
        <button onClick={switchToRegister}>Create a new account</button>
      </p>
    </div>
  );
}

export default Login;
