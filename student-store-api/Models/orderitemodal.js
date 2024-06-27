const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllOrderItems = async () => {
  return prisma.orderItem.findMany();
};

const getOrderItemById = async (order_item_id) => {
  return prisma.orderItem.findUnique({ where: { order_item_id: parseInt(order_item_id) } });
};

const createOrderItem = async (orderItemData) => {
  return prisma.orderItem.create({ data: orderItemData });
};

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
};