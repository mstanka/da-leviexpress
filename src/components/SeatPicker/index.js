import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Seat from './Seat';

const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  let history = useHistory();

  const handleBuy = () => {
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
        {seats.map((seatRow, i) => (
          <div className="seat-row" key={i}>
            {seatRow.map((seat, i) => (
              <Seat
                key={i}
                number={seat.number}
                isOccupied={seat.isOccupied}
                isSelected={selectedSeatNumber === seat.isSelected}
                onSelect={handleSeatSelect}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="btn"
        type="button"
        onClick={handleBuy}
        disabled={selectedSeatNumber === null}
      >
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
