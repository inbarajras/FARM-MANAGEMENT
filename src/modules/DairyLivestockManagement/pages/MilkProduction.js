import React from 'react';

function MilkProduction() {
  // Mock data for milk production
  const production = [
    { id: 1, date: '2025-04-18', morning: '285 L', evening: '253 L', total: '538 L', notes: 'Normal production' },
    { id: 2, date: '2025-04-17', morning: '290 L', evening: '260 L', total: '550 L', notes: 'Higher yield' },
    { id: 3, date: '2025-04-16', morning: '275 L', evening: '255 L', total: '530 L', notes: 'Normal production' },
    { id: 4, date: '2025-04-15', morning: '280 L', evening: '240 L', total: '520 L', notes: 'Slight decrease' },
    { id: 5, date: '2025-04-14', morning: '295 L', evening: '265 L', total: '560 L', notes: 'Good production day' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Milk Production Records</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Morning</th>
            <th>Evening</th>
            <th>Total</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {production.map(record => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.morning}</td>
              <td>{record.evening}</td>
              <td>{record.total}</td>
              <td>{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MilkProduction;