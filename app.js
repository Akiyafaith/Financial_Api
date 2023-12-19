const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const transactionRoutes = require('./app/routes/transactionRoutes');
const cors = require('cors'); // Import the cors middleware
require('dotenv').config(); // Load environment variables

const app = express();
const port = 3001;

// Create a connection pool to the MySQL database
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
