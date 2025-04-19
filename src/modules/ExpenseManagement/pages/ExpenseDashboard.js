import React from 'react';

function ExpenseDashboard() {
  // Mock data for expense dashboard
  const stats = {
    monthTotal: '$12,450',
    yearToDate: '$48,230',
    pendingApproval: '$1,850',
    budget: '$15,000'
  };

  const categoryDistribution = [
    { name: 'Feed', amount: '$5,200', percentage: '41.8%' },
    { name: 'Veterinary', amount: '$2,300', percentage: '18.5%' },
    { name: 'Equipment', amount: '$1,800', percentage: '14.5%' },
    { name: 'Utilities', amount: '$1,500', percentage: '12.0%' },
    { name: 'Wages', amount: '$1,650', percentage: '13.2%' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Expense Dashboard</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-header">Month Total</div>
          <div className="stat-card-value">{stats.monthTotal}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Year to Date</div>
          <div className="stat-card-value">{stats.yearToDate}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Pending Approval</div>
          <div className="stat-card-value">{stats.pendingApproval}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Monthly Budget</div>
          <div className="stat-card-value">{stats.budget}</div>
        </div>
      </div>

      <h2>Expense Distribution by Category</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {categoryDistribution.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>{category.amount}</td>
              <td>{category.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseDashboard;