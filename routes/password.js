const express = require('express');
const router = express.Router();
const {
	forgotPasswordController,
	resetPasswordController
} = require('../controller/passwordController');

// Sends the forgot password mail to the registered email id of the user

router.post('/forgot-password' , forgotPasswordController);

// Resets the password of the user based on the generated passwordToken

router.post('/reset-password' , resetPasswordController);

module.exports = router;
