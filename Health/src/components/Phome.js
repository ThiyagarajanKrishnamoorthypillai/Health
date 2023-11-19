import React, { useState } from 'react';

const Phome = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);
  
    const handleRegister = async () => {
      try {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (data.success) {
          setRegistered(true);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    };
  
    return (
      <div>
        <div className="register-container">
          {registered ? (
            <h2>Registration successful for {username}!</h2>
          ) : (
            <>
              <h2>Register</h2>
              <div className="input-container">
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label>Retype Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleRegister}>Register</button>
            </>
          )}
        </div>
      </div>
    );
}

export default Phome