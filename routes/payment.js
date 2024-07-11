const express = require('express');
const router = express.Router();
const { updatePayment } = require('../controller/paymentController');

// Make payment for order
router.put('/updatePayment/:id', updatePayment);

module.exports = router;

module.exports = router;
