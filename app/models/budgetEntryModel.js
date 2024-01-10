const { DataTypes } = require('sequelize');
const db = require('../database');

const BudgetEntry = db.define('BudgetEntry', {
  budget_entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true, 
  }, 
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

module.exports = BudgetEntry;
