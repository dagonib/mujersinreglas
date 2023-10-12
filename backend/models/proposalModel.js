import mongoose from 'mongoose';

const proposalSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  audience: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  formUrl: {
    type: String,
    required: false,
  },
});

const Proposal = mongoose.model('Proposal', proposalSchema);
export default Proposal;
