import React from 'react';

const BudgetComponent = ({ budget }) => {
  return (
    <div>
      <h2>Budget</h2>
      <p>Amount: {budget.amount}</p>
    </div>
  );
};

export default BudgetComponent;
