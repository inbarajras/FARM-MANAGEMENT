import React from 'react';

function InventoryDashboard() {
  // Mock data for inventory dashboard
  const stats = {
    totalItems: 48,
    lowStock: 5,
    stockValue: '$32,450',
    recentDeliveries: 3
  };

  const lowStockItems = [
    { id: 1, name: 'Premium Feed', category: 'Feed', currentStock: '150 kg', minLevel: '200 kg' },
    { id: 2, name: 'Antibiotics', category: 'Medicine', currentStock: '5 boxes', minLevel: '10 boxes' },
    { id: 3, name: 'Milk Filters', category: 'Equipment', currentStock: '35 units', minLevel: '50 units' },
    { id: 4, name: 'Cleaning Detergent', category: 'Supplies', currentStock: '12 L', minLevel: '20 L' },
    { id: 5, name: 'Calcium Supplement', category: 'Feed', currentStock: '80 kg', minLevel: '100 kg' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Inventory Dashboard</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-header">Total Items</div>
          <div className="stat-card-value">{stats.totalItems}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Low Stock Items</div>
          <div className="stat-card-value">{stats.lowStock}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Total Stock Value</div>
          <div className="stat-card-value">{stats.stockValue}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Recent Deliveries</div>
          <div className="stat-card-value">{stats.recentDeliveries}</div>
        </div>
      </div>

      <h2>Low Stock Items</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Current Stock</th>
            <th>Minimum Level</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.currentStock}</td>
              <td>{item.minLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryDashboard;