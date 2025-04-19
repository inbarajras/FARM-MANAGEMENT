import React from 'react';

function Performance() {
  // Mock data for performance reviews
  const reviews = [
    { id: 1, employee: 'John Smith', reviewDate: '2025-01-15', reviewer: 'CEO', rating: '4.8/5', notes: 'Excellent leadership skills and farm management' },
    { id: 2, employee: 'Mary Johnson', reviewDate: '2025-01-20', reviewer: 'Farm Manager', rating: '4.5/5', notes: 'Very knowledgeable and dedicated to animal health' },
    { id: 3, employee: 'Robert Brown', reviewDate: '2025-01-18', reviewer: 'Farm Manager', rating: '4.2/5', notes: 'Strong technical knowledge in dairy production' },
    { id: 4, employee: 'Sarah Williams', reviewDate: '2025-01-22', reviewer: 'Farm Manager', rating: '4.0/5', notes: 'Good with animals, needs some training on record keeping' },
    { id: 5, employee: 'Michael Davis', reviewDate: '2025-01-25', reviewer: 'Farm Manager', rating: '3.8/5', notes: 'Reliable equipment operator, could improve efficiency' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Performance Reviews</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Review Date</th>
            <th>Reviewer</th>
            <th>Rating</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review.id}>
              <td>{review.employee}</td>
              <td>{review.reviewDate}</td>
              <td>{review.reviewer}</td>
              <td>{review.rating}</td>
              <td>{review.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Performance;