const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const transactionRoutes = require('./app/routes/transactionRoutes');
const budgetEntryRoutes = require('./app/routes/budgetEntryRoutes');
const transactionInputRoutes = require('./app/routes/transactionInputRoutes')
const cors = require('cors'); 
const BudgetEntry = require('./app/models/budgetEntryModel');
require('dotenv').config(); 

const app = express();
const port = 3001;

// connection pool to the MySQL database
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Jamesace1$$$$',
  database: process.env.DB_NAME || 'financial_db',
  connectionLimit: 10,
});

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Test database connection
pool.query('SELECT 1 + 1', (err, results) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
    console.log('Database connection successful');
  }
});

// Use transaction routes
app.use('/api', transactionRoutes);
app.use('/api', budgetEntryRoutes);
app.use('/api', transactionInputRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
