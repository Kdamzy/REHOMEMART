const express = require('express');
const router = express.Router();
const {
  createReview,
} = require('../controller/reviewController');

router.post('/create', createReview);

module.exports = router;
