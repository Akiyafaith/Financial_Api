import React, { useState } from 'react';

const TransactionInput = ({ onTransactionSubmit }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = () => {
    onTransactionSubmit({ amount, description });

    // Clear the form
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Transaction Input</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TransactionInput;
