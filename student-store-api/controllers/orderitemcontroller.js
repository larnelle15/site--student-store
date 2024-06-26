const OrderItem = require('../Models/orderitemodal');

const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.getAllOrderItems();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.getOrderItemById(req.params.id);
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrderItem = async (req, res) => {
  try {
    const newOrderItem = await OrderItem.createOrderItem(req.body);
    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
};
