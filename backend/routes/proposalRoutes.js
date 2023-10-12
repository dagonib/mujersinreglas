import express from 'express';
import { getProposals } from '../controllers/proposalControllers.js';

const router = express.Router();

router.route('/').get(getProposals);

export default router;
