import React from 'react';
import Logo from './logo';

const Header: React.FC = () => (
  <header className="main__header header">
    <div className="header__logo">
      <Logo />
    </div>
  </header>
);

export default Header;
