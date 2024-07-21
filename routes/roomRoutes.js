import express from 'express';
import { createRoom, getAllRooms } from '../controllers/roomController.js';

const router = express.Router();

router.post('/rooms', createRoom);
router.get('/rooms/booked', getAllRooms);

export default router;
