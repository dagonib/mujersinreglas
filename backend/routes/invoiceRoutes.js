import express from 'express';
const router = express.Router();

import {
  createInvoice,
  getInvoices,
} from '../controllers/invoiceControllers.js';

router.route('/').get(getInvoices).post(createInvoice);

export default router;
