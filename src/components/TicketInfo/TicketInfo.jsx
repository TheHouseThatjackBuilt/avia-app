/* eslint-disable */
import React from 'react';
import dataFabric from '../../tools/dataFabric';
const TicketInfo = (props) => {
  const { origin, destination, departureTime, ArrivalTime, travelTime, transfersCount, stopsNames } = dataFabric(props);

  return (
    <div className="ticket__info">
      <div>
        <h3 className="ticket__description">{`${origin} - ${destination}`}</h3>
        <span>{`${departureTime} - ${ArrivalTime}`}</span>
      </div>
      <div>
        <h3 className="ticket__description">в пути</h3>
        <span>{travelTime}</span>
      </div>
      <div>
        <h3 className="ticket__description">{`пересадок: ${transfersCount}`}</h3>
        <span>{stopsNames}</span>
      </div>
    </div>
  );
};
export default TicketInfo;
