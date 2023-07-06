import React, { useState } from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';
import NavBar from './UnprotectedNavBar';

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


function handleSubmit(e) {
e.preventDefault();


  fetch("/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    })
    .then((res) => res.json())
    .then((user) => handleLogin(user));
    
    handleLogin();
    navigate('/protected/dashboard'); // Redirect to the protected dashboard
  };

  return (
    <>
    <NavBar />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="login-Form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input
        type="text"
        placeholder="Email or Phone"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <label htmlFor="password">Password</label>
        <input
        type="password"
        placeholder="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <button type="submit">Log In</button>
      </form>

    </>
  );
}

export default Login;
