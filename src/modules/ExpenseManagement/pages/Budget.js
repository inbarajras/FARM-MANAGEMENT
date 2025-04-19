import React from 'react';

function Budget() {
  // Mock data for budget planning
  const budgets = [
    { id: 1, month: 'January', planned: '$15,000', actual: '$14,320', variance: '-$680' },
    { id: 2, month: 'February', planned: '$14,500', actual: '$14,780', variance: '+$280' },
    { id: 3, month: 'March', planned: '$15,000', actual: '$14,680', variance: '-$320' },
    { id: 4, month: 'April', planned: '$15,000', actual: '$12,450', variance: '-$2,550' },
    { id: 5, month: 'May', planned: '$16,000', actual: 'N/A', variance: 'N/A' },
    { id: 6, month: 'June', planned: '$16,500', actual: 'N/A', variance: 'N/A' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Budget Planning</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Planned Budget</th>
            <th>Actual Expenses</th>
            <th>Variance</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget => (
            <tr key={budget.id}>
              <td>{budget.month}</td>
              <td>{budget.planned}</td>
              <td>{budget.actual}</td>
              <td>{budget.variance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Budget;