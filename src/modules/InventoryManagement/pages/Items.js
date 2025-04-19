import React from 'react';

function Items() {
  // Mock data for inventory items
  const items = [
    { id: 1, name: 'Premium Feed', category: 'Feed', unit: 'kg', quantity: 150, unitPrice: '$1.25', value: '$187.50' },
    { id: 2, name: 'Standard Feed', category: 'Feed', unit: 'kg', quantity: 350, unitPrice: '$0.85', value: '$297.50' },
    { id: 3, name: 'Antibiotics', category: 'Medicine', unit: 'box', quantity: 5, unitPrice: '$85.00', value: '$425.00' },
    { id: 4, name: 'Vaccines', category: 'Medicine', unit: 'vial', quantity: 25, unitPrice: '$42.00', value: '$1,050.00' },
    { id: 5, name: 'Milk Filters', category: 'Equipment', unit: 'unit', quantity: 35, unitPrice: '$3.50', value: '$122.50' },
    { id: 6, name: 'Cleaning Detergent', category: 'Supplies', unit: 'L', quantity: 12, unitPrice: '$8.75', value: '$105.00' },
    { id: 7, name: 'Calcium Supplement', category: 'Feed', unit: 'kg', quantity: 80, unitPrice: '$2.10', value: '$168.00' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Inventory Items</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.unit}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Items;