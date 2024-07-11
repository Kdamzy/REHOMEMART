const express = require('express');
const router = express.Router();
const { validateLocationMiddleware } = require('../middleware/Validation/validatelocation');
const {
  createLocation,
  getLocation,
  updateLocation,
  deleteLocation,
} = require('../controller/locationController');

// Create new location
router.post('/createlocation', validateLocationMiddleware, createLocation);

// Get  single location
router.get('/getalllocation/:id', getLocation);

// Update  location
router.put('/updatelocation/:id', validateLocationMiddleware, updateLocation);

// Delete  location
router.delete('/deletelocation/:id', deleteLocation);

module.exports = router;
