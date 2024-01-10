const express = require('express');
const router = express.Router();
const budgetEntryController = require('../controllers/budgetEntryController');

// new budget entry
router.post('/budget-entries', budgetEntryController.createBudget);

// Get all budget entries
router.get('/budget-entries', budgetEntryController.getAllBudgetEntries);

module.exports = router;
