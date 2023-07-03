const express = require('express');

const ordersController = require('../controllers/orders.controller');

const router = express.Router();

router.post('/', ordersController.addOrder); // /orders

router.get('/', ordersController.getOrders); // /orders

router.get('/success', ordersController.getSuccess); // /orders/success
router.get('/failure', ordersController.getFailure); // /orders/failure

module.exports = router;