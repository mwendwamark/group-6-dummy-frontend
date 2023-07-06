import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedNavBar from "./ProtectedNavBar";

function Dashboard() {
  return (
    <div>
      <ProtectedNavBar />
      <h3>Welcome to the Dashboard!</h3>
      <hr />
      <Outlet /> {/* Renders the nested child routes */}
    </div>
  );
}

export default Dashboard;
