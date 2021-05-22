import React, { Fragment, useState } from 'react';
import JourneyPicker from '../../components/JourneyPicker';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <Fragment>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey && <p>Nalezeno spojení s id ${journey.journeyId}</p>}
    </Fragment>
  );
};

export default Home;
