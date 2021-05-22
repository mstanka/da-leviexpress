import React, { useState } from 'react';
import Seat from '../Seat';

const SeatPicker = (seats, journeyId) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
          {seats.seats[0].map((seat, i) => (
            <Seat
              key={i}
              number={seat.number}
              isOccupied={seat.isOccupied}
              isSelected={selectedSeatNumber === seat.isSelected ? true : false}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <div className="seat-row">
          {seats.seats[1].map((seat, i) => (
            <Seat
              key={i}
              number={seat.number}
              isOccupied={seat.isOccupied}
              isSelected={selectedSeatNumber === seat.isSelected ? true : false}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <div className="seat-row">
          {seats.seats[2].map((seat, i) => (
            <Seat
              key={i}
              number={seat.number}
              isOccupied={seat.isOccupied}
              isSelected={selectedSeatNumber === seat.isSelected ? true : false}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <div className="seat-row">
          {seats.seats[3].map((seat, i) => (
            <Seat
              key={i}
              number={seat.number}
              isOccupied={seat.isOccupied}
              isSelected={selectedSeatNumber === seat.isSelected ? true : false}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <div className="seat-row">
          {seats.seats[4].map((seat, i) => (
            <Seat
              key={i}
              number={seat.number}
              isOccupied={seat.isOccupied}
              isSelected={selectedSeatNumber === seat.isSelected ? true : false}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
