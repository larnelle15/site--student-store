const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      order_items: true
    }
  });
};

const getOrderById = async (order_id) => {
  return prisma.order.findUnique({
    where: { order_id: parseInt(order_id) },
    include: {
      order_items: true
    }
  });
};

const addItemToOrder = async (orderItemData, order_id) => {
  const product = await prisma.product.findUnique({
    where: {id: parseInt(orderItemData.product_id)}
  })

  const order = await prisma.order.findUnique({
    where: {order_id: parseInt(order_id)}
  })

  await prisma.order.update({
    where: { order_id: parseInt(order_id)}, 
    data: {total_price: parseFloat(order.total_price) + parseFloat(product.price)}
})

  
    return prisma.orderItem.create({
    data: {
        order_id: parseInt(order_id),
        product_id: parseInt(orderItemData.product_id),
        quantity: parseInt(orderItemData.quantity),
        price: parseFloat(product.price) * parseInt(orderItemData.quantity) 
    }
  });
};

const createOrder = async (orderData) => {
  return prisma.order.create({ data: {
    customer_id: parseInt(orderData.customer_id),
    total_price: 0,
    status: orderData.status,
},
 });
};

const updateOrder = async (order_id, orderData) => {
  return prisma.order.update({
    where: { order_id: parseInt(order_id) },
    data: orderData,
  });
};

const deleteOrder = async (order_id, orderData) => {
  return prisma.order.delete({
    where: { order_id: parseInt(order_id) },
    data: orderData, 
  });
};

const totalOrder = async (order_id) => {
    const order =  await prisma.order.findUnique({
       where: {order_id: parseInt(order_id)}
      })
  
  
    return order.total_price
  
  };

module.exports = {
  getAllOrders,
  getOrderById,
  addItemToOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  totalOrder,
};

