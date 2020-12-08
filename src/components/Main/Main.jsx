/* eslint-disable */
import React from 'react';

import Filter from '../../containers/FilterContainer/FilterContainer';
import Tabs from '../Tabs/Tabs';
import TicketsContainer from '../../containers/TicketsContainer/TicketsContainer';

const Main = () => {
  return (
    <main className="main__content content">
      <Filter />
      <section className="content__tickets">
        <Tabs />
        <TicketsContainer />
      </section>
    </main>
  );
};

export default Main;
