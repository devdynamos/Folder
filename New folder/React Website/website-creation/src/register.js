import React, { useState } from 'react';
import './register.css';

function Register({ switchToLogin }) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    // Check if the username is available and save the new user
    const isRegistrationSuccessful = false; // Replace with actual registration logic

    if (isRegistrationSuccessful) {
      setSuccessMessage('Registration successful');
      // Redirect to the login page or do what's necessary
    } else {
      setErrorMessage('Registration failed. Username is taken or other issues.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{' '}
        <button onClick={switchToLogin}>Back to Login</button>
      </p>
    </div>
  );
}

export default Register;
