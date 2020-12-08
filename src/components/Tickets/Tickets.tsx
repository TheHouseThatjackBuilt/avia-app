import React from 'react';

const Ticket: React.FC = () => (
  <div className="ticket">
    <div className="ticket__header">
      <div className="ticket__price">13 400 Р</div>
      <div className="ticket__logo" />
    </div>
    <div className="ticket__content-container">
      <div className="ticket__info">
        <div>
          <h3 className="ticket__description">mow - hkt</h3>
          <span>10:45 – 08:00</span>
        </div>
        <div>
          <h3 className="ticket__description">в пути</h3>
          <span>21ч 15м</span>
        </div>
        <div>
          <h3 className="ticket__description">2 пересадки</h3>
          <span>hkg, jnb</span>
        </div>
      </div>
      <div className="ticket__info">
        <div>
          <h3 className="ticket__description">hkt - mow</h3>
          <span>11:20 – 00:50</span>
        </div>
        <div>
          <h3 className="ticket__description">в пути</h3>
          <span>13ч 30м</span>
        </div>
        <div>
          <h3 className="ticket__description">1 пересадка</h3>
          <span>hkg</span>
        </div>
      </div>
    </div>
  </div>
);

export default Ticket;
