const transactionInput = require('../models/TransactionInputModel');

// transaction input
exports.addtransactionInput = async (req, res) => {
  try {
    const { transactionName, amount } = req.body;
    const newtransactionInput = await transactionInput.create({ transactionName, amount });
    res.json(newtransactionInput);
  } catch (error) {
    console.error('Error adding transaction input:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.updateTransactionInput = async (req, res) => {
  try {
    const { id } = req.params;
    const { transactionName, amount } = req.body;

    const transactionInput = await TransactionInput.findByPk(id);
    if (transactionInput) {
      transactionInput.transactionName = transactionName;
      transactionInput.amount = amount;
      await transactionInput.save();
      res.json(transactionInput);
    } else {
      res.status(404).send('Transaction input not found');
    }
  } catch (error) {
    console.error('Error updating transaction input:', error.message);
    res.status(500).send('Internal Server Error');
  }
};