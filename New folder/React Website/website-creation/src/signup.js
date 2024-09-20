import React, { useState } from 'react';
import './signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    newPassword: '',
    dateOfBirth: '', // Add Date of Birth field
  });

  const [errorState, setErrorState] = useState({
    firstName: false,
    lastName: false,
    mobileNumber: false,
    email: false,
    newPassword: false,
    dateOfBirth: false, // Error state for Date of Birth
  });

  const [showTooltipInfo, setShowTooltipInfo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when typing
    setErrorState({ ...errorState, [name]: false });
  };

  const handleBlur = (field) => {
    if (formData[field] === '') {
      setErrorState({ ...errorState, [field]: true });
    }
  };

  const handleFocus = (field) => {
    if (errorState[field]) {
      setErrorState({ ...errorState, [field]: false });
    }
  };

  const handleTooltipClick = () => {
    setShowTooltipInfo(!showTooltipInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // You can send this data to your server for registration
  };

  return (
    <div className="card-container">
      <div className="signup-card">
        <h2>Create a New Account</h2>
        <p>It's quick and easy</p>
        <hr className="full-line" />
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className={`input-field ${errorState.firstName ? 'error' : ''}`}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={() => handleBlur('firstName')}
                onFocus={() => handleFocus('firstName')}
              />
              {errorState.firstName && (
                <div className="error-icon">
                  <span className="exclamation-mark">!</span>
                  <div className="error-message">Please enter your First Name</div>
                </div>
              )}
            </div>
            <div className={`input-field ${errorState.lastName ? 'error' : ''}`}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={() => handleBlur('lastName')}
                onFocus={() => handleFocus('lastName')}
              />
              {errorState.lastName && (
                <div className="error-icon">
                  <span className="exclamation-mark">!</span>
                  <div className="error-message">Please enter your Last Name</div>
                </div>
              )}
            </div>
          </div>
          <div className="input-container">
            <div className={`input-field ${errorState.mobileNumber ? 'error' : ''}`}>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number or Email Address"
                value={formData.mobileNumber}
                onChange={handleChange}
                onBlur={() => handleBlur('mobileNumber')}
                onFocus={() => handleFocus('mobileNumber')}
              />
              {errorState.mobileNumber && (
                <div className="error-icon">
                  <span className="exclamation-mark">!</span>
                  <div className="error-message">Please enter your Mobile Number or Email Address</div>
                </div>
              )}
            </div>
          </div>
          <div className="input-container">
            <div className={`input-field ${errorState.newPassword ? 'error' : ''}`}>
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
                onBlur={() => handleBlur('newPassword')}
                onFocus={() => handleFocus('newPassword')}
              />
              {errorState.newPassword && (
                <div className="error-icon">
                  <span className="exclamation-mark">!</span>
                  <div className="error-message">Please enter a New Password</div>
                </div>
              )}
            </div>
          </div>
          <label htmlFor="dateOfBirth">Date of Birth {/* Add Date of Birth label */}
            <div className="tooltip-icon" onClick={handleTooltipClick} title="Date of Birth Tooltip">
              <span>?</span>
            </div>
            {showTooltipInfo && (
              <div className="tooltip-info">
                {/* Information to be displayed when the tooltip is clicked */}
                <p>This is where you can enter your date of birth.</p>
              </div>
            )}
          </label>
          <div className="date-of-birth-dropdowns">
            <div className="date-dropdown">
              <select
                name="date"
                value={formData.date}
                onChange={handleChange}
              >
                <option value="">Day</option>
                {/* Add options for days */}
                {Array.from({ length: 31 }, (_, i) => 
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                )}
              </select>
            </div>
            <div className="month-dropdown">
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
              >
                <option value="">Month</option>
                {/* Add options for months */}
                <option value="January">January</option>
                <option value="February">February</option>
                {/* Add options for all months */}
              </select>
            </div>
            <div className="year-dropdown">
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Year</option>
                {/* Add options for years */}
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <label htmlFor="dateOfBirth">Gender {/* Add Date of Birth label */}
            <div className="tooltip-icon" onClick={handleTooltipClick} title="Date of Birth Tooltip">
              <span>?</span>
            </div>
            {showTooltipInfo && (
              <div className="tooltip-info">
                {/* Information to be displayed when the tooltip is clicked */}
                <p>This is where you can enter your Gender.</p>
              </div>
            )}
          </label>
<div className="gender-radio-container">
  <label>Male
    <input
      type="radio"
      name="gender"
      value="male"
      checked={formData.gender === 'male'}
      onChange={handleChange}
    />
  </label>
  <label>Female
    <input
      type="radio"
      name="gender"
      value="female"
      checked={formData.gender === 'female'}
      onChange={handleChange}
    />
  </label>
  <label>Custom
    <input
      type="radio"
      name="gender"
      value="custom"
      checked={formData.gender === 'custom'}
      onChange={handleChange}
    />
  </label>
</div>

          
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
