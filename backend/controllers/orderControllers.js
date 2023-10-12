import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

// @desc Get order details
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Create new order
// @route POST /api/orders
// @access Public
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    clientItems,
    orderItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    description,
    methodPaid,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      clientItems,
      orderItems,
      itemsPrice,
      shippingPrice,
      totalPrice,
      description,
      methodPaid,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Public
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not updated');
  }
});

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Create invoice number
// @route PUT /api/orders/:id/invoice
// @access PUBLIC
const updateOrderInvoice = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  const { invoiceNum } = req.body;

  if (order && invoiceNum) {
    order.invoiceNum = invoiceNum;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getOrders,
  updateOrderToDelivered,
  updateOrderInvoice,
};
