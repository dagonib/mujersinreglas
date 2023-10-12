import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import proposalRoutes from './routes/proposalRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// Para poder utilizar contenido en JSON
app.use(express.json());
app.use(cors());

const __dirname = path.resolve();
// API USERS
app.use('/api/users', userRoutes);

// API PRODUCTS
app.use('/api/products', productRoutes);

// API ORDERS
app.use('/api/orders', orderRoutes);

// UPLOAD FILES
app.use('/api/upload', uploadRoutes);

// HACER STATIC DE UPLOAD FOLDER
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// API EVENTS
app.use('/api/events', eventRoutes);

// API PROPOSALS
app.use('/api/proposals', proposalRoutes);

// API INVOICE
app.use('/api/invoices', invoiceRoutes);

// API PAYMENTS
app.use('/api/payments', paymentRoutes);

// MODES
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  // Inicio Development Status
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
