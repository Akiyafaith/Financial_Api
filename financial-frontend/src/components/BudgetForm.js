import React, { useState } from 'react';
import axios from 'axios';

const BudgetForm = () => {
  const [amount, setAmount] = useState('');
  const [category_id, setCategory] = useState('');

  const handleCreateBudget = async () => {
    try {
      const response = await axios.post('/api/budgets-entries', { amount, category_id });
      console.log(response.data);
    } catch (error) {
      console.error('Error creating budget:', error.message);
    }
  };

  return (
    <div>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Category ID:
        <input type="number" value={category_id} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <button onClick={handleCreateBudget}>Create Budget</button>
    </div>
  );
};

export default BudgetForm;
