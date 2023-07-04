import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Login from './Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path= "/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
