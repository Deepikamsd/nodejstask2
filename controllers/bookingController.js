let bookings = [];
let rooms = [];

export const createBooking = (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  const newBooking = { customerName, date, startTime, endTime, roomId };
  bookings.push(newBooking);
  res.status(200).send('Room booked successfully');
};

export const getAllBookings = (req, res) => {
  const customersWithBookings = bookings.map(booking => {
    const room = rooms.find(room => room.id === booking.roomId);
    return { ...booking, roomName: room ? room.name : 'Unknown' };
  });
  res.status(200).json(customersWithBookings);
};

export const getBookingsByCustomer = (req, res) => {
  const customerName = req.params.name;
  const customerBookings = bookings.filter(booking => booking.customerName === customerName);
  res.status(200).json({ count: customerBookings.length, bookings: customerBookings });
};
