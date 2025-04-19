import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import ExpenseDashboard from './pages/ExpenseDashboard';
import ExpenseList from './pages/ExpenseList';
import Categories from './pages/Categories';
import Budget from './pages/Budget';

function ExpenseManagement() {
  const navigate = useNavigate();

  return (
    <div className="module-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Expense Management</h2>
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/expense/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/expense/list">Expense List</NavLink></li>
          <li><NavLink to="/expense/categories">Categories</NavLink></li>
          <li><NavLink to="/expense/budget">Budget</NavLink></li>
        </ul>
      </div>

      <div className="content">
        <button className="back-button" onClick={() => navigate('/modules')}>
          Back to Modules
        </button>

        <Routes>
          <Route path="/" element={<ExpenseDashboard />} />
          <Route path="/dashboard" element={<ExpenseDashboard />} />
          <Route path="/list" element={<ExpenseList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </div>
  );
}

export default ExpenseManagement;