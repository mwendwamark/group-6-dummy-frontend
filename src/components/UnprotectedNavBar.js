import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";


function NavBar() {
  return (
  <nav className="unprotected-navbar">
  <li className="navbar-li">
  <Link to= "/">Home</Link>
  </li>
  <li className="navbar-li">
  <Link to= "/signup">Sign up</Link>
  </li>
  <li className="navbar-li">
  <Link to= "/login">Login</Link>
  </li>
  </nav>
  );
  }
  

export default NavBar;
