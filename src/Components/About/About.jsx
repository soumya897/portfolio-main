import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'



const About = () => {
  return (
   
  <div id='about' className='about'>
    <div className="title-box">
      <h1>About Me</h1>
      
    </div>

    <div className="about-sections">
      <div className="about-left">
        <img src={profile_img} alt="profile" />
      </div>

      <div className="about-right">
        <div className="about-cards">
          <div className="card">
            <h3>Skills</h3>
            <p>React | Java | MySQL</p>
          </div>
          <div className="card">
            <h3>Education</h3>
            <p>BTech in IT<br />TMSL(2022–2026)</p>
          </div>
          <div className="card">
            <h3>Projects</h3>
            <p>10+ Completed</p>
          </div>
        </div>

        <div className="about-para">
          <p>
            I’m Soumya Ghosh, a passionate and dedicated B.Tech student in Information Technology at Techno Main Salt Lake, Kolkata.
            I specialize in crafting dynamic and interactive web applications using JavaScript and React.js, with a strong foundation 
            in Java, Python, and database management using MySQL and MongoDB.
            My journey in tech is driven by curiosity, creativity, and the constant pursuit of solving real-world problems through code.
            I enjoy bringing ideas to life through clean, efficient, and scalable software solutions.
            
          </p>
          <a href="#contact">
          <button className="talk-btn">Let’s Talk</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

}

export default About

