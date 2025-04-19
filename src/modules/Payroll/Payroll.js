import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import PayrollDashboard from './pages/PayrollDashboard';
import Salaries from './pages/Salaries';
import Payments from './pages/Payments';

function Payroll() {
  const navigate = useNavigate();

  return (
    <div className="module-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Payroll</h2>
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/payroll/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/payroll/salaries">Salaries</NavLink></li>
          <li><NavLink to="/payroll/payments">Payments</NavLink></li>
        </ul>
        </div>

      <div className="content">
        <button className="back-button" onClick={() => navigate('/modules')}>
          Back to Modules
        </button>

        <Routes>
          <Route path="/" element={<PayrollDashboard />} />
          <Route path="/dashboard" element={<PayrollDashboard />} />
          <Route path="/salaries" element={<Salaries />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </div>
  );
}

export default Payroll;