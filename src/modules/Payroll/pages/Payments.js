import React from 'react';

function Payments() {
  // Mock data for payment history
  const payments = [
    { id: 1, employee: 'John Smith', amount: '$1,850', date: '2025-04-01', method: 'Bank Transfer', status: 'Completed' },
    { id: 2, employee: 'Mary Johnson', amount: '$2,100', date: '2025-04-01', method: 'Bank Transfer', status: 'Completed' },
    { id: 3, employee: 'Robert Brown', amount: '$1,750', date: '2025-04-01', method: 'Bank Transfer', status: 'Completed' },
    { id: 4, employee: 'Sarah Williams', amount: '$1,900', date: '2025-04-01', method: 'Bank Transfer', status: 'Completed' },
    { id: 5, employee: 'Michael Davis', amount: '$1,525', date: '2025-04-01', method: 'Bank Transfer', status: 'Completed' },
    { id: 6, employee: 'John Smith', amount: '$1,850', date: '2025-03-01', method: 'Bank Transfer', status: 'Completed' },
    { id: 7, employee: 'Mary Johnson', amount: '$2,100', date: '2025-03-01', method: 'Bank Transfer', status: 'Completed' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Payment History</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.employee}</td>
              <td>{payment.amount}</td>
              <td>{payment.date}</td>
              <td>{payment.method}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;