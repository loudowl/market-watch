import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#0047AB', padding: '10px 20px' }}>
      <h1
        style={{
          color: '#ECEAE3',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          letterSpacing: '0.5px',
          margin: 0,
        }}
      >
        Tech News Aggregator
      </h1>
    </header>
  );
};

export default Header;
