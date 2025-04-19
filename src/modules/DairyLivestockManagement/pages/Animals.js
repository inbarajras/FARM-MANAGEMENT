import React from 'react';

function Animals() {
  // Mock data for animals
  const animals = [
    { id: 201, type: 'Cow', breed: 'Holstein', birthDate: '2020-05-12', status: 'Lactating', milkAvg: '22 L/day' },
    { id: 202, type: 'Cow', breed: 'Jersey', birthDate: '2019-08-23', status: 'Lactating', milkAvg: '18 L/day' },
    { id: 203, type: 'Bull', breed: 'Angus', birthDate: '2018-11-05', status: 'Active', milkAvg: 'N/A' },
    { id: 204, type: 'Cow', breed: 'Brown Swiss', birthDate: '2021-02-17', status: 'Dry', milkAvg: '0 L/day' },
    { id: 205, type: 'Cow', breed: 'Holstein', birthDate: '2019-12-30', status: 'Lactating', milkAvg: '25 L/day' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1>Animal Management</h1>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Birth Date</th>
            <th>Status</th>
            <th>Milk Average</th>
          </tr>
        </thead>
        <tbody>
          {animals.map(animal => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.type}</td>
              <td>{animal.breed}</td>
              <td>{animal.birthDate}</td>
              <td>{animal.status}</td>
              <td>{animal.milkAvg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Animals;