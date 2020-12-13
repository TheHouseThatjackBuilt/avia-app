/* eslint-disable */
import React from 'react';

const Tabs = ({ tabsStatus, sortByPrice, sortBySpeed }) => {
  const { theCheapest, theFastest } = tabsStatus;
  const handlerClickCheap = () => {
    if (theCheapest) return;
    sortByPrice(true);
  };
  const handlerClickFast = () => {
    if (theFastest) return;
    sortBySpeed(true);
  };

  return (
    <div className="buttons">
      <button
        onClick={handlerClickCheap}
        type="button"
        className={`button ${theCheapest ? 'button__active' : 'button__cheap'}`}
      >
        cамый дешевый
      </button>
      <button
        onClick={handlerClickFast}
        type="button"
        className={`button ${theFastest ? 'button__active' : 'button__fast'}`}
      >
        самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
