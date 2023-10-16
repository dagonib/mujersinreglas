import asyncHandler from 'express-async-handler';
import Stripe from 'stripe';
import Order from '../models/orderModel.js';
import Invoice from '../models/invoiceModel.js';
import Product from '../models/productModel.js';
import dotenv from 'dotenv';

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const checkOut = asyncHandler(async (req, res) => {
  console.log('Antes del pago');

  try {
    const orderId = req.body.orderId;
    const order = await Order.findOne({ _id: orderId }).exec();
    // console.log('orden', order);
    // console.log('Datos cliente:', order.clientItems);
    const customer = await stripe.customers.create({
      metadata: {
        orderId: req.body.ordeId,
        items: JSON.stringify(order.orderItems),
      },
    });

    const shippingItem = {
      price_data: {
        product_data: {
          name: 'Envío',
        },
        currency: 'eur',
        unit_amount: order.shippingPrice * 100,
      },
      quantity: 1,
    };

    let line_items;

    if (
      order.clientItems.region === 'Ceuta' ||
      order.clientItems.region === 'Melilla' ||
      order.clientItems.region === 'Las Palmas' ||
      order.clientItems.region === 'Santa Cruz de Tenerife'
    ) {
      line_items = order.orderItems
        .map((item) => ({
          price_data: {
            product_data: {
              name: item.name,
            },
            currency: 'eur',
            unit_amount: Math.round((item.price / 1.21) * 100),
          },
          quantity: item.qty,
        }))
        .concat([shippingItem]);
    } else {
      line_items = order.orderItems
        .map((item) => ({
          price_data: {
            product_data: {
              name: item.name,
            },
            currency: 'eur',
            unit_amount: item.price * 100,
          },
          quantity: item.qty,
        }))
        .concat([shippingItem]);
    }

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `https://www.mujersinreglas.info/payment-confirmation/${orderId}`,
      cancel_url: 'https://www.mujersinreglas.info/agenda',
      customer: customer.id,
    });

    return res.json(session);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Error interno del servidor', error });
  }
});

const createInvoice = asyncHandler(async (req, res) => {
  const lastInvoice = await Invoice.findOne().sort({ number: -1 });
  let newNumber = 'MSR2023/001';
  let lastNumber;
  if (lastInvoice) {
    lastNumber = lastInvoice.number.split('/');
    const nextInvoiceNumber = parseInt(lastNumber[1], 10) + 1;
    newNumber = `MSR2023/${nextInvoiceNumber.toString().padStart(3, '0')}`;
  }

  const invoice = new Invoice({
    number: newNumber,
  });

  const createdInvoice = await invoice.save();
});

const updateProductStock = asyncHandler(async (productId, quantity) => {
  const product = await Product.findById(productId);

  if (product) {
    product.countInStock = product.countInStock - quantity;
    const updatedProduct = await product.save();
  } else {
    throw new Error('Product not found');
  }
});

let endpointSecret;
//  endpointSecret = process.env.END_POINT_SECRET;
//   'whsec_89b2c727a9dd05ba222ef76629b0b215fb713b2cf0bbac901ceabe7ce5555b9b';

const stripeHook = asyncHandler(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let data;
  let eventType;

  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(res.body, sig, endpointSecret);
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event
  if (eventType === 'payment_intent.succeeded') {
    console.log('Antes de crear el numero de factura');
    createInvoice();
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        const items = JSON.parse(customer.metadata.items);
        items.forEach((item) => {
          updateProductStock(item.product, item.qty);
        });
      })
      .catch((err) => console.log(err.message));
    console.log('Webhook');
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
});

export { checkOut, stripeHook };
