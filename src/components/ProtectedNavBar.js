import React from 'react';
import { Link } from 'react-router-dom';

function ProtectedNavBar() {
  return (
    <nav className="protected-navbar">
      <ul className="navbar-ul">
                <li className="navbar-li">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="navbar-li">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ProtectedNavBar;
