import React from 'react';

const Tabs: React.FC = () => (
  <div className="buttons">
    <button type="button" className="button button__cheap">
      cамый дешевый
    </button>
    <button type="button" className="button button__fast">
      самый быстрый
    </button>
  </div>
);

export default Tabs;
