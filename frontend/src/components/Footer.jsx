import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0047AB',
        color: '#ECEAE3',
        padding: '10px 20px',
        textAlign: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500,
        letterSpacing: '0.5px',
      }}
    >
      <p style={{ margin: 0 }}>&copy; 2023 Tech News Aggregator</p>
    </footer>
  );
};

export default Footer;
