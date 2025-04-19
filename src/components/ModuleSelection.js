import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import cow from '../images/cow.jpg';
import expense from '../images/expense.jpg';
import payroll from '../images/payroll.jpg';
import inventory from '../images/inventory.jpg';
import employee from '../images/employee.jpg';

function ModuleSelection() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const modules = [
    {
      id: 'dairy-livestock',
      name: 'Dairy & Livestock Management',
      description: 'Manage animals, milk production, health records and more.',
      path: '/dairy-livestock',
      color: '#3498db',
      image: cow  // Placeholder for dairy/livestock image
    },
    {
      id: 'payroll',
      name: 'Payroll',
      description: 'Handle employee salaries, bonuses, deductions and payments.',
      path: '/payroll',
      color: '#2ecc71',
      image: payroll  // Placeholder for payroll image
    },
    {
      id: 'expense',
      name: 'Expense Management',
      description: 'Track and manage all farm expenses and financial records.',
      path: '/expense',
      color: '#e74c3c',
      image: expense  // Placeholder for expense image
    },
    {
      id: 'inventory',
      name: 'Inventory Management',
      description: 'Manage feed, supplies, equipment and other inventory items.',
      path: '/inventory',
      color: '#f39c12',
      image: inventory  // Placeholder for inventory image
    },
    {
      id: 'employee',
      name: 'Employee Management',
      description: 'Manage staff details, attendance, performance and more.',
      path: '/employee',
      color: '#9b59b6',
      image: employee  // Placeholder for employee image
    }
  ];

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="module-selection">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Farm Management System</h1>
        <button 
          onClick={handleLogout} 
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      
      <div className="modules-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {modules.map((module) => (
          <div 
            key={module.id} 
            className="module-card"
            onClick={() => navigate(module.path)}
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              position: 'relative'
            }}
            onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'}}
            onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0)'}}
          >
            <div 
              style={{ height: '8px', backgroundColor: module.color }} 
            />
            <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <img 
                src={module.image} 
                alt={`${module.name} icon`} 
                style={{ 
                  width: '120px',
                  height: '160px',
                  marginRight: '1rem',
                  borderRadius: '8px'
                }}
              />
              <div className="module-card-content">
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{module.name}</h3>
                <p style={{ margin: '0', color: '#666' }}>{module.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModuleSelection;