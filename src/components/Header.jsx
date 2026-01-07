import React from 'react';

const Header = () => {
  return (
    <header className="section" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
      <div className="container">
        <div className="digital-font" style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            color: '#ffcc00',
            animation: 'glow 3s ease-in-out infinite',
            marginBottom: '10px'
          }}>
            YOUNESS BOUTAHAR
          </h1>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#ff0033',
            marginBottom: '20px'
          }}>
            INGÉNIEUR INFORMATIQUE
          </h2>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '1.2rem', color: '#f5f5f5' }}>
              +212 35892502
            </p>
            <p style={{ fontSize: '1.2rem', color: '#ffcc00' }}>
              boutahar.youness.dev@gmail.com
            </p>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px',
            marginTop: '30px'
          }}>
            <a href="#about" className="digital-font" style={{
              padding: '12px 30px',
              background: 'transparent',
              border: '2px solid #ff0033',
              color: '#ff0033',
              textDecoration: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.target.style.background = '#ff0033';
              e.target.style.color = '#000';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ff0033';
            }}>
              EXPLORER
            </a>
            <a href="#contact" className="digital-font" style={{
              padding: '12px 30px',
              background: 'transparent',
              border: '2px solid #ffcc00',
              color: '#ffcc00',
              textDecoration: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.target.style.background = '#ffcc00';
              e.target.style.color = '#000';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffcc00';
            }}>
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;