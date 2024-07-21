let rooms = [];
let bookings = [];

export const createRoom = (req, res) => {
  const { id, numberOfSeats, amenities, pricePerHour } = req.body;
  const newRoom = { id, numberOfSeats, amenities, pricePerHour };
  rooms.push(newRoom);
  res.status(200).send('Room created successfully');
};

export const getAllRooms = (req, res) => {
  const roomsWithBookings = rooms.map(room => {
    const roomBookings = bookings.filter(booking => booking.roomId === room.id);
    return { ...room, bookings: roomBookings };
  });
  res.status(200).json(roomsWithBookings);
};
