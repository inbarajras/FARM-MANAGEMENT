import React from 'react';

function Breeding() {
  // Mock data for breeding records
  const records = [
    { id: 1, cowId: 201, bullId: 203, date: '2025-01-15', status: 'Confirmed Pregnant', dueDate: '2025-10-25' },
    { id: 2, cowId: 202, bullId: 203, date: '2025-02-20', status: 'Confirmed Pregnant', dueDate: '2025-11-30' },
    { id: 3, cowId: 204, bullId: 203, date: '2025-03-10', status: 'Awaiting Confirmation', dueDate: 'TBD' },
    { id: 4, cowId: 205, bullId: 203, date: '2025-04-05', status: 'Inseminated', dueDate: 'TBD' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Breeding Records</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Cow ID</th>
            <th>Bull ID</th>
            <th>Breeding Date</th>
            <th>Status</th>
            <th>Expected Due Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.cowId}</td>
              <td>{record.bullId}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
              <td>{record.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Breeding;