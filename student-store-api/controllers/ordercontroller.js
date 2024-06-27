const Order = require("../Models/ordermodel");


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getOrderById = async (req, res) => {
  try {
    const order = await Order.getOrderById(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.updateOrder(req.params.id, req.body);
    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.deleteOrder(req.params.id);
    if (deletedOrder) {
      res.status(200).json(deletedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addItemToOrder = async (req, res) => {
    try {
      const newOrderItem = await Order.addItemToOrder(req.body, req.params.order_id);
      res.status(201).json(newOrderItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const totalOrder = async (req, res) => {
    try {
      const total = await Order.totalOrder(req.params.id);
      res.status(200).json({ total });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  totalOrder,
  addItemToOrder,
};