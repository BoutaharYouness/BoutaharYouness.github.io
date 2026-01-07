import React from 'react';

const academicProjects = [
  {
    title: "Dashboard Node-Red pour Robot Car",
    period: "Septembre 2022 – Novembre 2022",
    institution: "ESPRIT",
    description: "Tableau de bord pour commander et monitorer un robot mobile",
    tasks: [
      "Récupération des données de batterie en temps réel",
      "Localisation sur Google Maps via ESP8266",
      "Communication MQTT pour transmission des données"
    ],
    technologies: ["Node-Red", "MQTT Broker", "Arduino IDE", "ESP8266"]
  },
  {
    title: "Système d'Affichage Publicitaire Intelligent",
    period: "Octobre 2020 – Mai 2021",
    institution: "ESPRIT",
    description: "Système d'affichage intelligent avec gestion dynamique des publicités",
    tasks: [
      "Conception et développement du système",
      "Interface utilisateur pour création/modification/suppression de publicités",
      "Intégration matérielle avec Raspberry Pi"
    ],
    technologies: ["Firebase", "ReactJS", "Node.js", "C", "Raspberry Pi", "MQTT", "NodeMCU"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <h2 className="section-title digital-font">// PROJETS ACADÉMIQUES</h2>
        
        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {academicProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <h3 style={{ color: '#ffcc00', fontSize: '1.2rem' }}>
                  {project.title}
                </h3>
                <span style={{ 
                  background: '#ff0033', 
                  color: '#000',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {project.institution}
                </span>
              </div>
              
              <div style={{ 
                color: '#ff0033', 
                marginBottom: '15px',
                fontSize: '0.9rem'
              }}>
                {project.period}
              </div>
              
              <p style={{ marginBottom: '20px', color: '#b3b3b3' }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#ffcc00', marginBottom: '10px', fontSize: '1rem' }}>
                  Tâches principales :
                </h4>
                <ul style={{ paddingLeft: '20px' }}>
                  {project.tasks.map((task, i) => (
                    <li key={i} style={{ marginBottom: '5px', fontSize: '0.9rem' }}>{task}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: '#ff0033', marginBottom: '10px', fontSize: '1rem' }}>
                  Environnement technique :
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section Formation */}
        <div style={{ marginTop: '80px' }}>
          <h2 className="section-title digital-font">// FORMATION</h2>
          <div style={{ 
            background: 'rgba(255, 204, 0, 0.05)',
            borderLeft: '4px solid #ffcc00',
            padding: '30px',
            marginTop: '30px'
          }}>
            <h3 style={{ color: '#ffcc00', fontSize: '1.5rem', marginBottom: '10px' }}>
              Ingénieur en Informatique
            </h3>
            <p style={{ color: '#ff0033', fontSize: '1.1rem', marginBottom: '5px' }}>
              ESPRIT - École Supérieure Privée d'Ingénierie et de Technologies
            </p>
            <p style={{ color: '#b3b3b3' }}>
              Spécialisation en développement logiciel et systèmes informatiques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;