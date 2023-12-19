const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Jamesace1$$$$',
  database: process.env.DB_NAME || 'financial_db',
});

module.exports = sequelize;
