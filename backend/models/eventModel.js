import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
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
  date: {
    type: Date,
    required: false,
  },
  timeStart: {
    type: Date,
    required: false,
  },
  timeEnd: {
    type: Date,
    required: false,
  },
  place: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  inscription: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
