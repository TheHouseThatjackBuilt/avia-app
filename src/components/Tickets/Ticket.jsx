/* eslint-disable */
import React from 'react';

import TicketInfo from '../TicketInfo/TicketInfo';

const Ticket = ({ price, carrier, segments }) => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{`${price} P`}</div>
        <div className="ticket__logo">
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Logo" />
        </div>
      </div>
      <div className="ticket__content-container">
        <TicketInfo {...segments[0]} />
        <TicketInfo {...segments[1]} />
      </div>
    </div>
  );
};

export default Ticket;
