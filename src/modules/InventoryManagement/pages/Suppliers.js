import React from 'react';

function Suppliers() {
  // Mock data for suppliers
  const suppliers = [
    { id: 1, name: 'Farm Supplies Co.', category: 'Feed & Supplements', contact: '555-1234', lastDelivery: '2025-04-18', status: 'Active' },
    { id: 2, name: 'Vet Services Inc.', category: 'Medicine', contact: '555-2345', lastDelivery: '2025-04-16', status: 'Active' },
    { id: 3, name: 'Equipment Masters', category: 'Equipment', contact: '555-3456', lastDelivery: '2025-03-25', status: 'Active' },
    { id: 4, name: 'Farm Tech Solutions', category: 'Technology', contact: '555-4567', lastDelivery: '2025-03-15', status: 'Active' },
    { id: 5, name: 'Clean & Clear Ltd.', category: 'Cleaning Supplies', contact: '555-5678', lastDelivery: '2025-04-02', status: 'Active' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Suppliers</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Category</th>
            <th>Contact</th>
            <th>Last Delivery</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.category}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.lastDelivery}</td>
              <td>{supplier.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Suppliers;