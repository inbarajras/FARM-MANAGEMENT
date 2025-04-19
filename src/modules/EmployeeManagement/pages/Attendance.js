import React from 'react';

function Attendance() {
  // Mock data for attendance records
  const attendance = [
    { id: 1, employee: 'John Smith', date: '2025-04-18', checkIn: '07:30', checkOut: '17:00', status: 'Present' },
    { id: 2, employee: 'Mary Johnson', date: '2025-04-18', checkIn: '08:15', checkOut: '17:30', status: 'Present' },
    { id: 3, employee: 'Robert Brown', date: '2025-04-18', checkIn: '07:45', checkOut: '16:45', status: 'Present' },
    { id: 4, employee: 'Sarah Williams', date: '2025-04-18', checkIn: '---', checkOut: '---', status: 'Sick Leave' },
    { id: 5, employee: 'Michael Davis', date: '2025-04-18', checkIn: '07:50', checkOut: '16:30', status: 'Present' },
    { id: 6, employee: 'Jennifer Lee', date: '2025-04-18', checkIn: '08:00', checkOut: '17:15', status: 'Present' },
    { id: 7, employee: 'David Wilson', date: '2025-04-18', checkIn: '07:30', checkOut: '16:00', status: 'Present' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Attendance Records</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(record => (
            <tr key={record.id}>
              <td>{record.employee}</td>
              <td>{record.date}</td>
              <td>{record.checkIn}</td>
              <td>{record.checkOut}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;