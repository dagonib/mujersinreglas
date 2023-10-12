import asyncHandler from 'express-async-handler';
import Invoice from '../models/invoiceModel.js';

// @desc Fetch all invoices
// @route GET /api/invoices
// @access PUBLIC
const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
});

// @desc Create a Invoice
// @route POST /api/invoices
// @access Public
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
  res.status(201).json(createdInvoice);
});

export { createInvoice, getInvoices };
