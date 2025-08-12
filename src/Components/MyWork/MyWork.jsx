import React from 'react';
import './MyWork.css';

import mywork_data from './Mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="work-card"
            style={{ backgroundImage: `url(${work.w_img})` }}
          >
            <div className="overlay"></div>
            <div className="work-content">
              <h2>{work.title}</h2>
              <p>{work.desc}</p>
              <div className="buttons">
                <a href={work.visit} target="_blank" rel="noopener noreferrer">Visit</a>
                <a href={work.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mywork-showmore"
        onClick={() =>
          window.open("https://github.com/soumya897?tab=repositories", "_blank")
        }
      >
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
