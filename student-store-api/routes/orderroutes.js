const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordercontroller');

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.createOrder);

router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);
router.post('/:order_id/items', orderController.addItemToOrder);
router.get('/:id/total', orderController.totalOrder);

module.exports = router;