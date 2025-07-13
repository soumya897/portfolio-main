import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import soumyaResume from '../../assets/soumyaResume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Soumya Ghosh,</span> Software developer.</h1>
      <p>I’m always eager to explore new technologies, tackle challenging problems, and grow as a developer.
      If you're looking for someone who combines solid technical skills with a passion for learning and creating. 
       </p>
       <p><b>let’s connect!</b></p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me</AnchorLink></div>
        
        
        
        <a
          href={soumyaResume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
          download="soumyaResume">
          My resume
        </a>



      </div>
    </div>
  )
}

export default Hero
