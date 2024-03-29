const Transaction = require('../models/transactionModel');
const Category = require('../models/categoryModel');

// new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { amount, description} = req.body;
    const newTransaction = await Transaction.create({ amount, description});
    res.json(newTransaction);
  } catch (error) {
    console.error('Error creating transaction:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).send('Transaction not found');
    }
  } catch (error) {
    console.error('Error fetching transaction:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

// Update transaction by ID
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, description, category } = req.body;

    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      transaction.amount = amount;
      transaction.description = description;
      transaction.category = category;
      await transaction.save();
      res.json(transaction);
    } else {
      res.status(404).send('Transaction not found');
    }
  } catch (error) {
    console.error('Error updating transaction:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

// Delete transaction by ID
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      await transaction.destroy();
      res.send('Transaction deleted successfully');
    } else {
      res.status(404).send('Transaction not found');
    }
  } catch (error) {
    console.error('Error deleting transaction:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
