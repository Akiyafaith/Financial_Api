const { DataTypes } = require('sequelize');
const db = require('../database');

const DailyExpenditure = db.define('DailyExpenditure', {
  daily_expenditure_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_expenditure: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true, 
  },
});

module.exports = DailyExpenditure;
