const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllOrderItems = async () => {
  return prisma.order_items.findMany();
};

const getOrderItemById = async (order_item_id) => {
  return prisma.order_items.findUnique({ where: { order_item_id: parseInt(order_item_id) } });
};

const createOrderItem = async (orderItemData) => {
  return prisma.order_items.create({ data: orderItemData });
};

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
};