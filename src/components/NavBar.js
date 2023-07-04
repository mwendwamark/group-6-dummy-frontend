import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="topnav">
      <ul className="navBar">
        <li className="nav-item active">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/createaccount">Create Account</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
