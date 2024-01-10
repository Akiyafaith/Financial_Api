import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            Amount: {transaction.amount}, Description: {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
