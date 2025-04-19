import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Animals from './pages/Animals';
import Consumers from './pages/Consumers';
import Vendors from './pages/Vendors';
import MilkProduction from './pages/MilkProduction';
import HealthRecords from './pages/HealthRecords';
import Breeding from './pages/Breeding';

function DairyLivestockManagement() {
  const navigate = useNavigate();

  return (
    <div className="module-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dairy & Livestock</h2>
        </div>
        <ul className="sidebar-menu">
          <li><NavLink to="/dairy-livestock/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/dairy-livestock/animals">Animals</NavLink></li>
          <li><NavLink to="/dairy-livestock/milk-production">Milk Production</NavLink></li>
          <li><NavLink to="/dairy-livestock/health-records">Health Records</NavLink></li>
          <li><NavLink to="/dairy-livestock/breeding">Breeding</NavLink></li>
          <li><NavLink to="/dairy-livestock/consumers">Consumers</NavLink></li>
          <li><NavLink to="/dairy-livestock/vendors">Vendors</NavLink></li>
        </ul>
      </div>

      <div className="content">
        <button className="back-button" onClick={() => navigate('/modules')}>
          Back to Modules
        </button>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/consumers" element={<Consumers />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/milk-production" element={<MilkProduction />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/breeding" element={<Breeding />} />
        </Routes>
      </div>
    </div>
  );
}

export default DairyLivestockManagement;