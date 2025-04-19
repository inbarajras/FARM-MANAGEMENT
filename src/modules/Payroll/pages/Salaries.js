import React from 'react';

function Salaries() {
  // Mock data for salaries
  const salaries = [
    { id: 1, employee: 'John Smith', position: 'Farm Manager', baseSalary: '$2,200', bonus: '$350', deductions: '$700', netSalary: '$1,850' },
    { id: 2, employee: 'Mary Johnson', position: 'Veterinarian', baseSalary: '$2,500', bonus: '$0', deductions: '$400', netSalary: '$2,100' },
    { id: 3, employee: 'Robert Brown', position: 'Dairy Specialist', baseSalary: '$2,000', bonus: '$100', deductions: '$350', netSalary: '$1,750' },
    { id: 4, employee: 'Sarah Williams', position: 'Livestock Handler', baseSalary: '$1,800', bonus: '$300', deductions: '$200', netSalary: '$1,900' },
    { id: 5, employee: 'Michael Davis', position: 'Equipment Operator', baseSalary: '$1,600', bonus: '$150', deductions: '$225', netSalary: '$1,525' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Employee Salaries</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Position</th>
            <th>Base Salary</th>
            <th>Bonus</th>
            <th>Deductions</th>
            <th>Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map(salary => (
            <tr key={salary.id}>
              <td>{salary.employee}</td>
              <td>{salary.position}</td>
              <td>{salary.baseSalary}</td>
              <td>{salary.bonus}</td>
              <td>{salary.deductions}</td>
              <td>{salary.netSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Salaries;