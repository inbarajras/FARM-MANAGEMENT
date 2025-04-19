import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import ModuleSelection from './components/ModuleSelection';
import DairyLivestockManagement from './modules/DairyLivestockManagement/DairyLivestockManagement';
import Payroll from './modules/Payroll/Payroll';
import ExpenseManagement from './modules/ExpenseManagement/ExpenseManagement';
import InventoryManagement from './modules/InventoryManagement/InventoryManagement';
import EmployeeManagement from './modules/EmployeeManagement/EmployeeManagement';
import './App.css';

// Auth context
export const AuthContext = React.createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Auth provider value
  const authContextValue = {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/modules" />} />
            <Route path="/modules" element={isAuthenticated ? <ModuleSelection /> : <Navigate to="/login" />} />
            <Route path="/dairy-livestock/*" element={isAuthenticated ? <DairyLivestockManagement /> : <Navigate to="/login" />} />
            <Route path="/payroll/*" element={isAuthenticated ? <Payroll /> : <Navigate to="/login" />} />
            <Route path="/expense/*" element={isAuthenticated ? <ExpenseManagement /> : <Navigate to="/login" />} />
            <Route path="/inventory/*" element={isAuthenticated ? <InventoryManagement /> : <Navigate to="/login" />} />
            <Route path="/employee/*" element={isAuthenticated ? <EmployeeManagement /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to={isAuthenticated ? "/modules" : "/login"} />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;