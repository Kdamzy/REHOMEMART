const { User } = require("../models");
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { 
  registerUser,
  loginUser,
  refreshToken,
 } = require("../controller/authController");


// register new users and authentication
router.post('/api/users/register/', registerUser);
router.post('/api/users/login/', loginUser);
router.post('/api/login/refresh/', refreshToken); 

module.exports = router;
