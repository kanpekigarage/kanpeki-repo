import React from 'react';
import './hamburger.css'; // Make sure to create and import this CSS file

function Hamburger({ opened, onClick }) {
  return (
    <div className={`hamburger-icon ${opened ? 'open' : ''}`} onClick={onClick}>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
}

export default Hamburger;