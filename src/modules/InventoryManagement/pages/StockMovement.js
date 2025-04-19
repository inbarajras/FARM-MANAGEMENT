import React from 'react';

function StockMovement() {
  // Mock data for stock movement
  const movements = [
    { id: 1, date: '2025-04-18', item: 'Premium Feed', type: 'Received', quantity: '200 kg', source: 'Farm Supplies Co.' },
    { id: 2, date: '2025-04-17', item: 'Standard Feed', type: 'Used', quantity: '50 kg', source: 'Daily Feeding' },
    { id: 3, date: '2025-04-16', item: 'Antibiotics', type: 'Received', quantity: '3 boxes', source: 'Vet Services Inc.' },
    { id: 4, date: '2025-04-15', item: 'Milk Filters', type: 'Used', quantity: '15 units', source: 'Milk Processing' },
    { id: 5, date: '2025-04-14', item: 'Vaccines', type: 'Used', quantity: '5 vials', source: 'Animal Vaccination' },
    { id: 6, date: '2025-04-13', item: 'Cleaning Detergent', type: 'Used', quantity: '3 L', source: 'Equipment Cleaning' },
    { id: 7, date: '2025-04-12', item: 'Calcium Supplement', type: 'Received', quantity: '100 kg', source: 'Farm Supplies Co.' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Stock Movement</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Source/Destination</th>
          </tr>
        </thead>
        <tbody>
          {movements.map(movement => (
            <tr key={movement.id}>
              <td>{movement.date}</td>
              <td>{movement.item}</td>
              <td>{movement.type}</td>
              <td>{movement.quantity}</td>
              <td>{movement.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockMovement;