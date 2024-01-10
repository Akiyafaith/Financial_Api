import React, { useState, useEffect } from 'react';
import TransactionInput from './components/TransactionInput';
import TransactionList from './components/TransactionList';
import BudgetComponent from './components/BudgetComponent';
import ExpenditureComponent from './components/ExpenditureComponent';
import BudgetManagement from './components/BudgetManagement';
import axios from 'axios';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState({});
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  useEffect(() => {
    // Fetch transactions, budget, and total expenditure 
    axios.get('http://localhost:3001/api/transactions').then((response) => {
      setTransactions(response.data);
    });

    axios.get('http://localhost:3001/api/budget-entries').then((response) => {
      setBudget(response.data);
    });

    axios.get('http://localhost:3001/api/total-expenditure').then((response) => {
      setTotalExpenditure(response.data.totalExpenditure);
    });
  }, []);

  const handleTransactionSubmit = (transactionData) => {
    // Make an API call to submit the transaction data
    axios.post('http://localhost:3001/api/transactions', transactionData).then((response) => {
      setTransactions([...transactions, response.data]);
    });
  };
  
  return (
    <div>
      <h1>Financial Tracking App</h1>
      <TransactionInput onTransactionSubmit={handleTransactionSubmit} />
      <TransactionList transactions={transactions} />
      <BudgetComponent budget={budget} />
      <ExpenditureComponent totalExpenditure={totalExpenditure} />
      <BudgetManagement />
    </div>
  );
};

export default App;
