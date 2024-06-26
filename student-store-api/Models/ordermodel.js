const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllOrders = async () => {
   return prisma.orders.findMany({
     include: {
       Order_items: true
     }
  });
 };

// const getAllOrders = async () => {
//     return prisma.order.findMany();
//   };


const getOrderById = async (order_id) => {
  return prisma.orders.findUnique({
    where: { order_id: parseInt(order_id) },
    include: {
      Order_items: true
    }
  });
};

const createOrder = async (orderData) => {
  return prisma.orders.create({ data: orderData });
};

const updateOrder = async (order_id, orderData) => {
  return prisma.orders.update({
    where: { order_id: parseInt(order_id) },
    data: orderData,
  });
};

const deleteOrder = async (order_id) => {
  return prisma.orders.delete({
    where: { order_id: parseInt(order_id) }
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
