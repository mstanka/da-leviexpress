import React, { Fragment, useState } from 'react';
import JourneyDetail from '../../components/JourneyDetail';
import JourneyPicker from '../../components/JourneyPicker';

const Home = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);
  return (
    <Fragment>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey && <JourneyDetail journey={journey} />}
    </Fragment>
  );
};

export default Home;
