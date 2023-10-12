import mongoose from 'mongoose';

const invoiceSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;
