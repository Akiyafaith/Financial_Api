const express = require('express');
const router = express.Router();
const dailyExpenditureController = require('../controllers/dailyExpenditureController');

// new daily expenditure
router.post('/daily-expenditures', dailyExpenditureController.createDailyExpenditure);

// Get all daily expenditures
router.get('/daily-expenditures', dailyExpenditureController.getAllDailyExpenditures);

module.exports = router;
