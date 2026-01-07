import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title digital-font">// À PROPOS</h2>
        <div style={{ 
          background: 'rgba(255, 0, 51, 0.05)', 
          padding: '40px',
          borderLeft: '4px solid #ff0033'
        }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Ingénieur informatique <span className="accent-red">passionné</span>, apprenant rapide et capable de penser de manière <span className="highlight">créative</span> et <span className="highlight">innovante</span>.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Avec une solide compréhension des concepts de programmation, je me consacre à la création de <span className="highlight">solutions professionnelles et innovantes</span>, en tirant parti de ma passion pour la technologie et la résolution de problèmes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;