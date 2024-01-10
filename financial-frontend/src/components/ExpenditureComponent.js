import React from 'react';

const ExpenditureComponent = ({ totalExpenditure }) => {
  return (
    <div>
      <h2>Total Expenditure</h2>
      <p>Total: {totalExpenditure}</p>
    </div>
  );
};

export default ExpenditureComponent;
