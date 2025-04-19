import React from 'react';

function Vendors() {
  // Mock data for vendors
  const vendors = [
    { id: 1, name: 'Farm Supplies Co.', type: 'Feed', contact: '555-1234', lastOrder: '2025-04-10', status: 'Active' },
    { id: 2, name: 'Vet Services Inc.', type: 'Veterinary', contact: '555-2345', lastOrder: '2025-03-25', status: 'Active' },
    { id: 3, name: 'Equipment Masters', type: 'Machinery', contact: '555-3456', lastOrder: '2025-02-15', status: 'Inactive' },
    { id: 4, name: 'Organic Feeds Ltd.', type: 'Feed', contact: '555-4567', lastOrder: '2025-04-05', status: 'Active' },
    { id: 5, name: 'Farm Tech Solutions', type: 'Technology', contact: '555-5678', lastOrder: '2025-03-20', status: 'Active' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Vendor Management</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Contact</th>
            <th>Last Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>{vendor.name}</td>
              <td>{vendor.type}</td>
              <td>{vendor.contact}</td>
              <td>{vendor.lastOrder}</td>
              <td>{vendor.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vendors;