// financial_api/app/models/transactionModel.js
const { DataTypes } = require('sequelize');
const db = require('../database');

const Transaction = db.define('Transaction', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Transaction;
