import express from 'express';
import roomRoutes from './routes/roomRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use('/', roomRoutes);
app.use('/', bookingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});



