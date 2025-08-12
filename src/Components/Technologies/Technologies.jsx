import React from 'react';
import './Technologies.css';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaJava, FaGitAlt, FaGithub} from 'react-icons/fa';
import { SiTailwindcss,SiElectron , SiC, SiCplusplus, SiPython, SiMysql, SiMongodb, SiFirebase,SiExpress } from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Electron", icon: <SiElectron color="#509ca9ff" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Express", icon: <SiExpress color="#8d7a7aff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "C", icon: <SiC color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "JAVA", icon: <FaJava color="#007396" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#b4a6a6ff" /> }
  
];

const Technologies = () => {
  return (
    <section id="skills" className="technologies-section">
      <h2>Technologies</h2>

      <p className="subtitle">The Skills I Have</p>
      
    
      <div className="tech-grid">
        {skills.map((skill, index) => (
          <div className="tech-item" key={index}>
            <div className="icon-large">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
