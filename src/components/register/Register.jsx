import React, { useState } from 'react';
import Notification from './Notification';
import './register.css';
import { useNavigate } from "react-router-dom"



const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [value, setValue] = useState(false)

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(true)
    console.log(email, password, username);
    setEmail("")
    setPassword("")
    setUsername("")
    setTimeout(() => {
      navigate("/")
    }, 2000)
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      {value && <Notification />}
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;

