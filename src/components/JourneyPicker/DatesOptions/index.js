import React, { Fragment } from 'react';

const DatesOptions = ({ dates }) => {
  return (
    <Fragment>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date}>{date}</option>
      ))}
    </Fragment>
  );
};

export default DatesOptions;
