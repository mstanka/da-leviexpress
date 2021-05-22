import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Seat from '../Seat';

const SeatPicker = (seats, journeyId) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };
  let history = useHistory();

  const handleBuy = () => {
    console.log('Funguju');
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((resp) => resp.json())
      .then((json) => history.push(`/reservation/${json.data.reservationId}`));
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
      <button
        className="btn"
        type="button"
        onClick={handleBuy}
        disabled={selectedSeatNumber === null ? true : false}
      >
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
