import React from 'react';
import logo from '../data/uffs.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo UFFS" />
        <h1>Universidade Federal da Fronteira Sul</h1>
      </div>
    </header>
  );
};

export default Header
