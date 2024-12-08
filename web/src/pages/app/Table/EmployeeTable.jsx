import React from 'react';
import DataTable from 'react-data-table-component';

const EmployeeTable = () => {
  const data = [
    { id: 1, name: 'Naveen', age: 26, occupation: 'Engineer' },
    { id: 2, name: 'Praveen', age: 25, occupation: 'Designer' },
    { id: 3, name: 'Ram', age: 30, occupation: 'Developer' },
  ];

  const columns = [
    { name: 'ID', selector: (row) => row.id, sortable: true },
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Age', selector: (row) => row.age, sortable: true },
    { name: 'Occupation', selector: (row) => row.occupation },
  ];
  return (
    <div>
      <DataTable
        title='Employee List'
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        highlightOnHover
        striped
        fixedHeader
        fixedHeaderScrollHeight='300px'
        responsive></DataTable>
    </div>
  );
};

export default EmployeeTable;
