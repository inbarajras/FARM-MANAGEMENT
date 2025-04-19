import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeList from './pages/EmployeeList';
import Attendance from './pages/Attendance';
import Performance from './pages/Performance';

function EmployeeManagement() {
  const navigate = useNavigate();

  return (
    <div className="module-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Employee Management</h2>
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/employee/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/employee/list">Employee List</NavLink></li>
          <li><NavLink to="/employee/attendance">Attendance</NavLink></li>
          <li><NavLink to="/employee/performance">Performance</NavLink></li>
        </ul>
      </div>

      <div className="content">
        <button className="back-button" onClick={() => navigate('/modules')}>
          Back to Modules
        </button>

        <Routes>
          <Route path="/" element={<EmployeeDashboard />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/performance" element={<Performance />} />
        </Routes>
      </div>
    </div>
  );
}

export default EmployeeManagement;