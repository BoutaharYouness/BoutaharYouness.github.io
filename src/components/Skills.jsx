import React from 'react';

const Skills = () => {
  const technicalSkills = {
    "Développement Mobile": ["Flutter/Dart", "Android/Java", "Riverpod", "Provider"],
    "Développement Web": ["HTML5", "CSS3", "JavaScript", "ReactJS", "Python", "Bootstrap", "jQuery"],
    "Frameworks": ["ReactJS", "Spring Boot", "FastAPI", "Node.js"],
    "Bases de Données": ["MongoDB", "MySQL", "Firebase", "Oracle"],
    "Outils & DevOps": ["Git/GitHub", "Docker", "Jira", "Trello", "Maven", "JUnit"],
    "Méthodologies": ["SCRUM", "UML", "MERISE"]
  };

  const softSkills = [
    "Autonomie",
    "Résolution des problèmes",
    "Travail en équipe",
    "Curiosité et apprentissage continu",
    "Créativité",
    "Sens de l'organisation",
    "Prise de Décision"
  ];

  return (
    <section id="skills" className="section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <h2 className="section-title digital-font">// COMPÉTENCES</h2>
        
        <div className="skills-grid">
          <div>
            <h3 style={{ color: '#ffcc00', marginBottom: '20px', fontSize: '1.5rem' }}>TECHNIQUES</h3>
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <div key={index} style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#ff0033', marginBottom: '10px' }}>› {category}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map((skill, i) => (
                    <span key={i} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 style={{ color: '#ffcc00', marginBottom: '20px', fontSize: '1.5rem' }}>SOFT SKILLS</h3>
            <div style={{ 
              padding: '25px',
              border: '1px solid #333',
              borderRadius: '8px',
              background: 'rgba(255, 204, 0, 0.05)'
            }}>
              {softSkills.map((skill, index) => (
                <div key={index} style={{ 
                  marginBottom: '15px',
                  paddingBottom: '15px',
                  borderBottom: index < softSkills.length - 1 ? '1px solid #333' : 'none'
                }}>
                  <span style={{ color: '#ffcc00', marginRight: '10px' }}>›</span>
                  <span style={{ fontSize: '1.1rem' }}>{skill}</span>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <h3 style={{ color: '#ff0033', marginBottom: '20px', fontSize: '1.5rem' }}>LANGUES</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span>Français</span>
                    <div style={{ 
                      height: '8px',
                      background: '#333',
                      borderRadius: '4px',
                      marginTop: '5px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '90%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #ff0033, #ffcc00)',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                    <span style={{ float: 'right', color: '#ffcc00' }}>Avancé</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span>Anglais</span>
                    <div style={{ 
                      height: '8px',
                      background: '#333',
                      borderRadius: '4px',
                      marginTop: '5px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '70%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #ff0033, #ffcc00)',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                    <span style={{ float: 'right', color: '#ffcc00' }}>Intermédiaire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;