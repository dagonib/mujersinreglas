import asyncHandler from 'express-async-handler';
import Proposal from '../models/proposalModel.js';

// @desc Fetch all proposals
// @route GET /api/proposals
// @access PUBLIC
const getProposals = asyncHandler(async (req, res) => {
  const proposals = await Proposal.find({});
  res.json(proposals);
});

export { getProposals };
