import React from 'react';

function EmployeeDashboard() {
  // Mock data for employee dashboard
  const stats = {
    totalEmployees: 15,
    attendanceRate: '94%',
    daysWithoutIncident: 78,
    openPositions: 2
  };

  const recentActivities = [
    { id: 1, activity: 'John Smith completed safety training', timestamp: '2025-04-18' },
    { id: 2, activity: 'Sarah Williams took sick leave', timestamp: '2025-04-17' },
    { id: 3, activity: 'New position opened: Feed Specialist', timestamp: '2025-04-15' },
    { id: 4, activity: 'Robert Brown anniversary: 5 years', timestamp: '2025-04-12' },
    { id: 5, activity: 'Monthly staff meeting held', timestamp: '2025-04-10' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Employee Dashboard</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-header">Total Employees</div>
          <div className="stat-card-value">{stats.totalEmployees}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Attendance Rate</div>
          <div className="stat-card-value">{stats.attendanceRate}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Days Without Incident</div>
          <div className="stat-card-value">{stats.daysWithoutIncident}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Open Positions</div>
          <div className="stat-card-value">{stats.openPositions}</div>
        </div>
      </div>

      <h2>Recent Activities</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date</th>
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

export default EmployeeDashboard;