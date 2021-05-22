import React, { Fragment } from 'react';

const CityOptions = ({ cities }) => {
  return (
    <Fragment>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option value={city.name} key={city.code}>
          {city.name}
        </option>
      ))}
    </Fragment>
  );
};

export default CityOptions;
