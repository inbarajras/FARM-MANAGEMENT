import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import InventoryDashboard from './pages/InventoryDashboard';
import Items from './pages/Items';
import StockMovement from './pages/StockMovement';
import Suppliers from './pages/Suppliers';

function InventoryManagement() {
  const navigate = useNavigate();

  return (
    <div className="module-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Inventory Management</h2>
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/inventory/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/inventory/items">Inventory Items</NavLink></li>
          <li><NavLink to="/inventory/stock-movement">Stock Movement</NavLink></li>
          <li><NavLink to="/inventory/suppliers">Suppliers</NavLink></li>
        </ul>
      </div>

      <div className="content">
        <button className="back-button" onClick={() => navigate('/modules')}>
          Back to Modules
        </button>

        <Routes>
          <Route path="/" element={<InventoryDashboard />} />
          <Route path="/dashboard" element={<InventoryDashboard />} />
          <Route path="/items" element={<Items />} />
          <Route path="/stock-movement" element={<StockMovement />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Routes>
      </div>
    </div>
  );
}

export default InventoryManagement;