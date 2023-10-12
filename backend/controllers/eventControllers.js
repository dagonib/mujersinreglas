import asyncHandler from 'express-async-handler';
import Event from '../models/eventModel.js';

// @desc Fetch all events
// @route GET /api/events
// @access PUBLIC
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  res.json(events);
});

// @desc Get event by id
// @route GET /api/events/:id
// @access Private
const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

// @desc Create a Event
// @route POST /api/events
// @access Private/Admin
const createEvent = asyncHandler(async (req, res) => {
  const event = new Event({
    type: 'Sample type',
    name: 'Sample name',
    description: 'Sample description',
    date: null,
    timeStart: null,
    timeEnd: null,
    place: 'Sample place',
    address: 'Sample address',
    price: 0,
    organizer: 'Sample organizer',
    inscription: 'Sample inscription',
  });

  const createdEvent = await event.save();
  res.status(201).json(createdEvent);
});

// @desc Update a event
// @route PUT /api/events/:id
// @access Private/Admin
const updateEvent = asyncHandler(async (req, res) => {
  const {
    type,
    name,
    description,
    date,
    timeStart,
    timeEnd,
    place,
    address,
    price,
    organizer,
    inscription,
    link,
  } = req.body;

  const event = await Event.findById(req.params.id);
  console.log('Controller: ', typeof timeStart);
  if (event) {
    event.type = type;
    event.name = name;
    event.description = description;
    event.date = date;
    event.timeStart = timeStart;
    event.timeEnd = timeEnd;
    event.place = place;
    event.address = address;
    event.price = price;
    event.organizer = organizer;
    event.inscription = inscription;
    event.link = link;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

// @desc Delete a event
// @route DELETE /api/events/:id
// @access Private/admin
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    await event.remove();
    res.json({ message: 'Evento eliminado' });
  } else {
    res.status(404);
    throw new Error('Evento no encontrado');
  }
});

export { getEvents, getEventById, createEvent, updateEvent, deleteEvent };
