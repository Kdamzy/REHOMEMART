const express = require('express');
const router = express.Router();
const passport = require('../middleware/passport');
const { 
    getAllorders,
    getUserorders,
    confirmorder,
    rejectorder,
    cancelorder,
    orderitems,
    completeorder,
    getitemorders,
    createorderitems,
    getorderById
} = require('../controller/orderController');
// check and validate order


router.post('/api/items/order/', orderitems);
router.get('/api/order/', getAllorders);
router.get('/api/order/:orderId/order/', getorderById);
router.get('/api/order/user/', passport.authenticate('bearer', { session: false }), getUserorders);
router.get('/api/order/:items_id', getitemorders);
router.post('/api/items/order/:items_id', passport.authenticate('bearer', { session: false }), createorderitems);
router.post('/api/order/:orderId/confirm/', passport.authenticate('bearer', { session: false }), confirmorder);
router.post('/api/order/:orderId/complete/', passport.authenticate('bearer', { session: false }), completeorder);
router.post('/api/order/:orderId/reject/', passport.authenticate('bearer', { session: false }), rejectorder);
router.post('/api/order/:orderId/cancel/',  cancelorder);

module.exports = router;
