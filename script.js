document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display transactions
    fetchTransactions();
  });
  
  async function fetchTransactions() {
    try {
      // Replace with your API endpoint
      const response = await fetch('http://localhost:3001/api/transactions');
      const transactions = await response.json();
  
      // Display transactions on the frontend
      displayTransactions(transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }
  
  function displayTransactions(transactions) {
    const transactionsContainer = document.getElementById('transactions');
  
    transactions.forEach(transaction => {
      const transactionElement = document.createElement('div');
      transactionElement.classList.add('transaction');
  
      // Format and display transaction details
      transactionElement.innerHTML = `
        <strong>Transaction ID:</strong> ${transaction.id}<br>
        <strong>Amount:</strong> $${transaction.amount}<br>
        <strong>Description:</strong> ${transaction.description}<br>
        <strong>Created At:</strong> ${new Date(transaction.createdAt).toLocaleString()}<br>
        <strong>Updated At:</strong> ${new Date(transaction.updatedAt).toLocaleString()}<br>
        <hr>
      `;
  
      transactionsContainer.appendChild(transactionElement);
    });
  }
  