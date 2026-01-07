import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section" style={{ 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      borderTop: '2px solid #ff0033'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="digital-font" style={{ 
            fontSize: '2.5rem',
            color: '#ffcc00',
            marginBottom: '30px'
          }}>
            CONTACT
          </h2>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ color: '#ff0033', marginBottom: '10px' }}>TÉLÉPHONE</div>
              <div style={{ fontSize: '1.2rem' }}>+212 35892502</div>
            </div>
            <div>
              <div style={{ color: '#ff0033', marginBottom: '10px' }}>EMAIL</div>
              <div style={{ fontSize: '1.2rem', color: '#ffcc00' }}>
                boutahar.youness.dev@gmail.com
              </div>
            </div>
            <div>
              <div style={{ color: '#ff0033', marginBottom: '10px' }}>DISPONIBILITÉ</div>
              <div style={{ fontSize: '1.2rem' }}>Immédiate</div>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <a href="#" className="digital-font" style={{
              padding: '10px 25px',
              background: 'transparent',
              border: '2px solid #ff0033',
              color: '#ff0033',
              textDecoration: 'none',
              transition: 'all 0.3s',
              fontSize: '0.9rem'
            }} onMouseEnter={(e) => {
              e.target.style.background = '#ff0033';
              e.target.style.color = '#000';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ff0033';
            }}>
              LINKEDIN
            </a>
            <a href="#" className="digital-font" style={{
              padding: '10px 25px',
              background: 'transparent',
              border: '2px solid #ffcc00',
              color: '#ffcc00',
              textDecoration: 'none',
              transition: 'all 0.3s',
              fontSize: '0.9rem'
            }} onMouseEnter={(e) => {
              e.target.style.background = '#ffcc00';
              e.target.style.color = '#000';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffcc00';
            }}>
              GITHUB
            </a>
            <a href="#" className="digital-font" style={{
              padding: '10px 25px',
              background: 'transparent',
              border: '2px solid #fff',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.3s',
              fontSize: '0.9rem'
            }} onMouseEnter={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#000';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
            }}>
              CV PDF
            </a>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #333',
            paddingTop: '20px',
            color: '#666',
            fontSize: '0.9rem'
          }}>
            <p>© {currentYear} Youness BOUTAHAR. Tous droits réservés.</p>
            <p style={{ marginTop: '10px', color: '#ff0033' }}>
              Portfolio développé avec ReactJS • Design numérique
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;