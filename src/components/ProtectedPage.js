import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ProtectedPage() {
  return (
    <div>
      <h3>Welcome to the Protected Page!</h3>
      <nav>
        <ul>
          <li>
            <Link to="/protected/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/protected/profile">Profile</Link>
          </li>
          <li>
            <Link to="/protected/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* Renders the nested child routes */}
    </div>
  );
}

export default ProtectedPage;
