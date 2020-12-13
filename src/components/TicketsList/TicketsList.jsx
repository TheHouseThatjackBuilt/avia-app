/* eslint-disable */
import React from 'react';

import Ticket from '../Tickets/Ticket';

const TicketsList = ({ tickets }) => {
  const renderTicket = tickets.map(({ price, carrier, segments }) => {
    const key = `${price}${carrier}${segments[0].duration}`;
    return <Ticket key={key} price={price} segments={segments} carrier={carrier} />;
  });

  return <>{renderTicket}</>;
};
export default TicketsList;
