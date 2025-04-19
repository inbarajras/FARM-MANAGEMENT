import React from 'react';

function Dashboard() {
  // Mock data for dashboard
  const stats = {
    totalAnimals: 127,
    milkProduction: '573 L',
    activeConsumers: 15,
    pendingDeliveries: 8
  };

  const recentActivities = [
    { id: 1, activity: 'Cow #235 health check completed', timestamp: '2 hours ago' },
    { id: 2, activity: 'Added 250 liters to inventory', timestamp: '5 hours ago' },
    { id: 3, activity: 'New calf born - ID #312', timestamp: '1 day ago' },
    { id: 4, activity: 'Delivered 150L to Consumer #15', timestamp: '1 day ago' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Dairy & Livestock Dashboard</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-header">Total Animals</div>
          <div className="stat-card-value">{stats.totalAnimals}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Today's Milk Production</div>
          <div className="stat-card-value">{stats.milkProduction}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Active Consumers</div>
          <div className="stat-card-value">{stats.activeConsumers}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Pending Deliveries</div>
          <div className="stat-card-value">{stats.pendingDeliveries}</div>
        </div>
      </div>

      <h2>Recent Activities</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {recentActivities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.activity}</td>
              <td>{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;