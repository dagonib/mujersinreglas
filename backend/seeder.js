import mongoose from 'mongoose';
import dotenv from 'dotenv';

// DATA
import users from './data/users.js';
import products from './data/products.js';
import events from './data/events.js';
import proposals from './data/proposals.js';
import invoices from './data/invoices.js';

// MODELS
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import Event from './models/eventModel.js';
import Proposal from './models/proposalModel.js';
import Invoice from './models/invoiceModel.js';

// Configuración
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    /*  await User.deleteMany();
    const createdUsers = await User.insertMany(users);

    // Obtener el 1er usuario --> Admin
    const adminUser = createdUsers[0]._id;

    // Añadir el usuario al array de products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    // Añadir los eventos.
    await Event.insertMany(events);
    
    await Proposal.insertMany(proposals);
    */
    await Invoice.insertMany(invoices);
    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await User.deleteMany();
    // await Product.deleteMany();
    await Order.deleteMany();
    await Invoice.deleteMany();
    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
