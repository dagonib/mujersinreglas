import express from 'express';
import {
  authUser,
  deleteUser,
  getUserById,
  getUserDetails,
  getUsers,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// API: /api/users/...
router.route('/').get(protect, admin, getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserDetails);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
