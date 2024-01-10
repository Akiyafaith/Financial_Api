const Transaction = require('../models/transactionModel');
const DailyExpenditure = require('../models/dailyExpenditureModel');

// new daily expenditure
exports.createDailyExpenditure = async (req, res) => {
  try {
    const { category_id } = req.body;

    // Retrieve individual expenditures
    const expenditures = await Transaction.findAll({
      where: { category_id },
      attributes: ['amount'],
    });

    // Sum up the expenditures
    const total_expenditure = expenditures.reduce((total, expenditure) => total + expenditure.amount, 0);

    // DailyExpenditure record
    const newDailyExpenditure = await DailyExpenditure.create({
      total_expenditure,
      category_id,
    });

    res.json(newDailyExpenditure);
  } catch (error) {
    console.error('Error creating daily expenditure:', error.message);
    res.status(500).send('Internal Server Error');
  }
};