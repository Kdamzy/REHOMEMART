const express = require('express');
const router = express.Router();
const { 
    createCategory,
    updateCategory,
    deleteCategory
 } = require('../controller/categoryController');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');
const validateCategory = require('../middleware/Validation/validateCategories'); // Import validateCategory



router.post('/create', createCategory);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);


module.exports = router;