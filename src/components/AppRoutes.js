import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Login from './Login';
import ProtectedPage from './ProtectedPage';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Profile from './Profile';

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route
        path="/protected/*"
        element={isAuthenticated ? <ProtectedPage /> : <Navigate to="/login" />}
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
