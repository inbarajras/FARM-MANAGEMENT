import React from 'react';

function ExpenseList() {
  // Mock data for expenses
  const expenses = [
    { id: 1, date: '2025-04-15', category: 'Feed', vendor: 'Farm Supplies Co.', amount: '$1,250', status: 'Approved' },
    { id: 2, date: '2025-04-12', category: 'Veterinary', vendor: 'Vet Services Inc.', amount: '$850', status: 'Approved' },
    { id: 3, date: '2025-04-10', category: 'Equipment', vendor: 'Equipment Masters', amount: '$1,800', status: 'Approved' },
    { id: 4, date: '2025-04-05', category: 'Utilities', vendor: 'Power Company', amount: '$520', status: 'Approved' },
    { id: 5, date: '2025-04-03', category: 'Feed', vendor: 'Organic Feeds Ltd.', amount: '$950', status: 'Approved' },
    { id: 6, date: '2025-04-18', category: 'Veterinary', vendor: 'Vet Services Inc.', amount: '$750', status: 'Pending' },
    { id: 7, date: '2025-04-17', category: 'Equipment', vendor: 'Farm Tech Solutions', amount: '$1,100', status: 'Pending' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Expense List</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.vendor}</td>
              <td>{expense.amount}</td>
              <td>{expense.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;