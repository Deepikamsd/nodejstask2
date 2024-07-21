import express from 'express';
import { createBooking, getAllBookings, getBookingsByCustomer } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/bookings', createBooking);
router.get('/customers/booked', getAllBookings);
router.get('/customers/:name/bookings', getBookingsByCustomer);

export default router;
