import express from 'express';
import stripe from 'stripe';
import { checkOut, stripeHook } from '../controllers/paymentController.js';
import { createInvoice } from '../controllers/invoiceControllers.js';

import asyncHandler from 'express-async-handler';
import Invoice from '../models/invoiceModel.js';
import cors from 'cors';

const router = express.Router();

router.route('/').post(checkOut);

router
  .route('/webhook', express.raw({ type: 'application/json' }))
  .post(stripeHook);

router.get('/', (req, res) => res.send('/'));

export default router;
