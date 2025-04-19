import React from 'react';

function EmployeeList() {
  // Mock data for employees
  const employees = [
    { id: 1, name: 'John Smith', position: 'Farm Manager', department: 'Management', joinDate: '2020-06-15', status: 'Active' },
    { id: 2, name: 'Mary Johnson', position: 'Veterinarian', department: 'Animal Health', joinDate: '2021-03-10', status: 'Active' },
    { id: 3, name: 'Robert Brown', position: 'Dairy Specialist', department: 'Dairy Production', joinDate: '2020-04-18', status: 'Active' },
    { id: 4, name: 'Sarah Williams', position: 'Livestock Handler', department: 'Animal Care', joinDate: '2022-01-05', status: 'Active' },
    { id: 5, name: 'Michael Davis', position: 'Equipment Operator', department: 'Operations', joinDate: '2021-09-22', status: 'Active' },
    { id: 6, name: 'Jennifer Lee', position: 'Administrative Assistant', department: 'Administration', joinDate: '2022-05-16', status: 'Active' },
    { id: 7, name: 'David Wilson', position: 'Milking Technician', department: 'Dairy Production', joinDate: '2023-02-08', status: 'Active' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Employee List</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Join Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.joinDate}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;