import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const country =  'Canada';

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
        country,
      });

      if (response.status === 200) {
        console.log('Sign-up successful');
        alert("Successfuly added");
        setUsername('');
      setPassword('');
      setEmail('');
        // Add further logic or redirection here
      } else {
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>{country} Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default App;
