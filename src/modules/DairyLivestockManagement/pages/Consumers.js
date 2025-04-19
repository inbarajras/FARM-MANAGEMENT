import React from 'react';

function Consumers() {
  // Mock data for consumers
  const consumers = [
    { id: 1, name: 'Metro Supermarket', type: 'Wholesale', location: 'City Center', quantity: '200 L/week', lastDelivery: '2025-04-15' },
    { id: 2, name: 'Green Valley Cafe', type: 'Restaurant', location: 'North End', quantity: '50 L/week', lastDelivery: '2025-04-17' },
    { id: 3, name: 'Fresh Dairy Shop', type: 'Retail', location: 'West Market', quantity: '100 L/week', lastDelivery: '2025-04-16' },
    { id: 4, name: 'Smith Family', type: 'Individual', location: 'South Hill', quantity: '10 L/week', lastDelivery: '2025-04-18' },
    { id: 5, name: 'Sunny Bakery', type: 'Business', location: 'East Quarter', quantity: '75 L/week', lastDelivery: '2025-04-14' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Consumer Management</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Quantity</th>
            <th>Last Delivery</th>
          </tr>
        </thead>
        <tbody>
          {consumers.map(consumer => (
            <tr key={consumer.id}>
              <td>{consumer.id}</td>
              <td>{consumer.name}</td>
              <td>{consumer.type}</td>
              <td>{consumer.location}</td>
              <td>{consumer.quantity}</td>
              <td>{consumer.lastDelivery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consumers;