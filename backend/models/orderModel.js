import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    clientItems: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      telephone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      region: { type: String, required: true },
      country: { type: String, required: true },
      dni: { type: String, required: false },
      comentarie: { type: String, required: false },
    },
    orderItems: [
      {
        name: { type: String, required: true },
        type: { type: String, required: false },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    description: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    methodPaid: {
      type: String,
      required: false,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    isRecieved: {
      type: Boolean,
      required: true,
      default: false,
    },
    receivedAt: {
      type: Date,
    },
    invoiceNum: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
