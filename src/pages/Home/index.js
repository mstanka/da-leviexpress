import React, { Fragment, useState } from 'react';
import JourneyDetail from '../../components/JourneyDetail';
import JourneyPicker from '../../components/JourneyPicker';
import SeatPicker from '../../components/SeatPicker';

const Home = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);
  
  return (
    <Fragment>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey && <JourneyDetail journey={journey} />}
      {journey && (
        <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
      )}
    </Fragment>
  );
};

export default Home;
