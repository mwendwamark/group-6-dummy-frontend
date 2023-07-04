import React, { useState } from "react";
import "./App.css";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then(onLogin);
  }
  return (
    <>
      <div className="Form">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="Sign-Up-form" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>         
          <label htmlFor="lastname">Name</label>
          <input type="text" placeholder="Full Name" />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirmation-pass">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmation-pass"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
