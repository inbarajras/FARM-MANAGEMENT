import React from 'react';

function Categories() {
  // Mock data for expense categories
  const categories = [
    { id: 1, name: 'Feed', budget: '$5,500', spent: '$5,200', remaining: '$300' },
    { id: 2, name: 'Veterinary', budget: '$3,000', spent: '$2,300', remaining: '$700' },
    { id: 3, name: 'Equipment', budget: '$2,500', spent: '$1,800', remaining: '$700' },
    { id: 4, name: 'Utilities', budget: '$1,800', spent: '$1,500', remaining: '$300' },
    { id: 5, name: 'Wages', budget: '$2,200', spent: '$1,650', remaining: '$550' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Expense Categories</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Budget</th>
            <th>Spent</th>
            <th>Remaining</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.budget}</td>
              <td>{category.spent}</td>
              <td>{category.remaining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;