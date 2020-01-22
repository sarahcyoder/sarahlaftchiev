import React from 'react';
import Resume from './files/resume.pdf';
import icon from './img/woman-programmer.png';
import Project from './Project.js';

const Header = () => {

  return (
    <div className="bodyContainer">
      <h2>Things I've Done Lately</h2>
      <Project
        title="This website, a React app."
        url="https://github.com/sarahcyoder/sarahlaftchiev"
        label="See it on GitHub"
      />
      <Project
        title="A portfolio for my husband, created with Gatsby and a Drupal 8 backend."
        url="https://github.com/sarahcyoder/emil-laftchiev"
        label="See it on GitHub"
      />
      <Project
        title="Contributed to thirdandgrove.com, a Gatsby site."
        url="https://github.com/thirdandgrove/thirdandgrove-com-gatsby"
        label="See it on GitHub"
      />
      <div className="project">
        <h3>Dozens of other projects at Third and Grove</h3>
        <p>Such as <a href="https://www.draper.com/" target="_blank" rel="noopener noreferrer">draper.com</a> and <a href="https://www.wvi.org/" target="_blank" rel="noopener noreferrer">wvi.org</a></p>
      </div>
      <div className="learn-more">
        <h2>Learn More</h2>
        <p><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></p>
        <p><a href="https://github.com/sarahcyoder" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/sarahcyoder/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
      <img src={icon} alt="Engineering software." />
    </div>
  )
}

export default Header;
