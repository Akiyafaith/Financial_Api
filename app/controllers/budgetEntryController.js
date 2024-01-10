const BudgetEntry = require('../models/budgetEntryModel');

// new budget entry
exports.createBudget = async (req, res) => {
  try {
    const { amount, category, startDate, endDate } = req.body;
    const newBudgetEntry = await BudgetEntry.create({ budget_entry_id, amount, category_id });
    res.json(newBudgetEntry);
  } catch (error) {
    console.error('Error creating budget entry:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

// Get all budget entries
exports.getAllBudgetEntries = async (req, res) => {
  try {
    const budgetEntries = await BudgetEntry.findAll();
    res.json(budgetEntries);
  } catch (error) {
    console.error('Error fetching budget entries:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
