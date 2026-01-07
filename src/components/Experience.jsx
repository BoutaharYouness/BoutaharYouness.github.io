import React from 'react';

const experiences = [
  {
    title: "Développeur Mobile Flutter | Freelance",
    period: "Février 2024 – Avril 2024",
    location: "Tunis",
    project: "Movie AppMovies",
    description: "Création d'une application pour afficher les films les plus regardés, récents et populaires avec pagination dynamique",
    achievements: [
      "Configuration des appels API TMDb",
      "Implémentation de Riverpod pour la gestion d'état",
      "Développement des fonctionnalités de recherche"
    ],
    technologies: ["Flutter", "Riverpod", "API TMDb"]
  },
  {
    title: "Développeur Mobile Flutter | Full Remote Factory",
    period: "Février 2023 – Décembre 2023",
    location: "Tunis",
    project: "Application E-commerce SWIPE&Click",
    description: "Développement d'application e-commerce avec animations fluides et gestion des produits",
    achievements: [
      "Fonctionnalités de glissement vertical pour navigation",
      "Animations pour expérience utilisateur optimisée",
      "Intégration WebService PrestaShop",
      "Gestion des erreurs et mises à jour temps réel"
    ],
    technologies: ["Flutter", "PrestaShop WebService", "Provider", "GitHub"]
  },
  {
    title: "Développeur Full Stack | Horizon Hope",
    period: "Décembre 2022 – Janvier 2023",
    location: "Tunis",
    project: "Smart Care",
    description: "Application mobile pour prescriptions médicales intelligentes",
    achievements: [
      "Création d'ordonnances médicales intelligentes",
      "Facilitation de la gestion des prescriptions",
      "Suivi des traitements médicaux"
    ],
    technologies: ["Flutter", "Python", "FastAPI", "REST API"]
  },
  {
    title: "Développeur Full Stack | 3S-Treetronix",
    period: "Février 2022 – Septembre 2022",
    location: "Tunis",
    project: "Application de Géolocalisation",
    description: "Application de suivi d'objets via carte électronique connectée au LoRaWAN",
    achievements: [
      "Conception et développement de l'application",
      "Intégration de la cartographie",
      "Mise en place du backend et notifications"
    ],
    technologies: ["Flutter", "Node.js", "MongoDB", "Apache Kafka", "FCM", "REST API"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title digital-font">// EXPÉRIENCES</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} style={{
              marginBottom: '50px',
              paddingLeft: '30px',
              borderLeft: '3px solid #ff0033',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                left: '-10px',
                top: '0',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: index === 0 ? '#ffcc00' : '#ff0033',
                border: '3px solid #000'
              }}></div>
              
              <h3 style={{ color: '#ffcc00', fontSize: '1.3rem', marginBottom: '5px' }}>
                {exp.title}
              </h3>
              <div style={{ color: '#ff0033', marginBottom: '10px' }}>
                <span style={{ marginRight: '20px' }}>{exp.period}</span>
                <span>📍 {exp.location}</span>
              </div>
              
              <div className="project-card" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#fff', marginBottom: '10px' }}>
                  <span style={{ color: '#ffcc00' }}>› </span>
                  {exp.project}
                </h4>
                <p style={{ marginBottom: '15px', color: '#b3b3b3' }}>{exp.description}</p>
                
                <div style={{ marginBottom: '15px' }}>
                  <h5 style={{ color: '#ff0033', marginBottom: '8px' }}>Réalisations :</h5>
                  <ul style={{ paddingLeft: '20px' }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{ marginBottom: '5px' }}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 style={{ color: '#ff0033', marginBottom: '8px' }}>Technologies :</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;