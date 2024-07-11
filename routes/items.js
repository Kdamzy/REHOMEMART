const express = require('express');
const passport = require('../middleware/passport');

// Import Multer middleware

const { 
    createitems,
    getAllitems,
    getUserPostings,
    getitemsById,
    upload,
    uploadImage 
} = require('../controller/itemsController');


const router = express.Router();

router.post('/api/items/upload/',  passport.authenticate('bearer', { session: false }), upload.single('image'), uploadImage);
router.get('/api/items/',  getAllitems);
router.get('/api/items/', passport.authenticate('bearer', { session: false }), getUserPostings);
router.get('/api/items/:items_id', getitemsById);
router.post('/api/items/create/', passport.authenticate('bearer', { session: false }), upload.single('image'), createitems);

module.exports = router;
