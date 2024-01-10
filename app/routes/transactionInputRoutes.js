const express = require('express');
const router = express.Router();
const transactionInputController = require('../controllers/transactionInputController');

// transaction input
router.post('/', transactionInputController.addtransactionInput);
router.put('/transaction-inputs/:id', transactionInputController.updateTransactionInput);
module.exports = router;
