import React from 'react';

function HealthRecords() {
  // Mock data for health records
  const records = [
    { id: 1, animalId: 203, date: '2025-04-10', type: 'Vaccination', details: 'Annual vaccination', performer: 'Dr. Johnson' },
    { id: 2, animalId: 201, date: '2025-04-08', type: 'Check-up', details: 'Routine check-up', performer: 'Dr. Williams' },
    { id: 3, animalId: 204, date: '2025-04-05', type: 'Treatment', details: 'Hoof problem treatment', performer: 'Dr. Johnson' },
    { id: 4, animalId: 202, date: '2025-04-02', type: 'Vaccination', details: 'Annual vaccination', performer: 'Dr. Williams' },
    { id: 5, animalId: 205, date: '2025-03-28', type: 'Check-up', details: 'Routine check-up', performer: 'Dr. Smith' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Animal Health Records</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Animal ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Details</th>
            <th>Performed By</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.animalId}</td>
              <td>{record.date}</td>
              <td>{record.type}</td>
              <td>{record.details}</td>
              <td>{record.performer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HealthRecords;