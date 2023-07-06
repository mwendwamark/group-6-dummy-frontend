import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />

      {isLoggedIn ? (
        <Route path="/protected/*" element={<Dashboard />}>
          <Route path="protected/profile" element={<Profile />} />
          <Route path="protected/settings" element={<Settings />} />
        </Route>
      ) : (
        <Navigate to="/login" replace />
      )}
    </Routes>
  );
}

export default AppRoutes;
