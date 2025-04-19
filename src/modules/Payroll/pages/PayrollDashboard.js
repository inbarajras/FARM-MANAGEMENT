import React from 'react';

function PayrollDashboard() {
  // Mock data for payroll dashboard
  const stats = {
    totalEmployees: 15,
    monthlyPayroll: '$24,560',
    pendingPayments: 3,
    averageSalary: '$1,637'
  };

  const recentPayments = [
    { id: 1, employee: 'John Smith', amount: '$1,850', date: '2025-04-01', status: 'Completed' },
    { id: 2, employee: 'Mary Johnson', amount: '$2,100', date: '2025-04-01', status: 'Completed' },
    { id: 3, employee: 'Robert Brown', amount: '$1,750', date: '2025-04-01', status: 'Completed' },
    { id: 4, employee: 'Sarah Williams', amount: '$1,900', date: '2025-04-01', status: 'Completed' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Payroll Dashboard</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-header">Total Employees</div>
          <div className="stat-card-value">{stats.totalEmployees}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Monthly Payroll</div>
          <div className="stat-card-value">{stats.monthlyPayroll}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Pending Payments</div>
          <div className="stat-card-value">{stats.pendingPayments}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">Average Salary</div>
          <div className="stat-card-value">{stats.averageSalary}</div>
        </div>
      </div>

      <h2>Recent Payments</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentPayments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.employee}</td>
              <td>{payment.amount}</td>
              <td>{payment.date}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PayrollDashboard;