import React from 'react';
import './Technologies.css';

const skills = [
  { name: "HTML & CSS", level: "95%" },
  { name: "React JS", level: "88%" },
  { name: "JavaScript", level: "85%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Java", level: "87%" },
  { name: "MySQL", level: "93%" },
  { name: "GitHub", level: "95%" },
];

const Technologies = () => {
  return (
    <section id="skills" className="technologies-section">
      <h2>Technologies</h2>
      <p className="subtitle">The Skills I Have</p>

      <div className="tech-container">
        {skills.map((skill, index) => (
          <div key={index} className="tech-bar">
            <span className="tech-name">{skill.name}</span>
            <div className="bar">
              <div className="bar-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
