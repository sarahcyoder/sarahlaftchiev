import React from 'react';

const Header = () => {

  return (
    <div className="bodyContainer">
      <h2>Things I've Done Lately</h2>
      <div className="project">
        <h3>This website, a React app.</h3>
        <p><a href="https://github.com/sarahcyoder/sarahlaftchiev" target="_blank" rel="noopener noreferrer">See it on GitHub</a></p>
      </div>
      <div className="project">
        <h3>A portfolio for my husband, created with Gatsby and a Drupal 8 backend.</h3>
        <p><a href="https://github.com/sarahcyoder/emil-laftchiev" target="_blank" rel="noopener noreferrer">See it on GitHub</a></p>
      </div>
      <div className="project">
        <h3>Dozens of projects at Third and Grove, such as...</h3>
        <p><a href="https://www.thirdandgrove.com/" target="_blank" rel="noopener noreferrer">thirdandgrove.com</a> | <a href="https://github.com/thirdandgrove/thirdandgrove-com-gatsby" target="_blank" rel="noopener noreferrer">See it on Github</a></p>
        <p>Sites like <a href="https://www.draper.com/" target="_blank" rel="noopener noreferrer">draper.com</a> and <a href="https://www.wvi.org/" target="_blank" rel="noopener noreferrer">wvi.org</a></p>
      </div>
      <div className="learn-more">
        <h2>Learn More</h2>
        <p><a href="https://github.com/sarahcyoder" target="_blank" rel="noopener noreferrer">Github</a></p>
        <p><a href="https://www.linkedin.com/in/sarahcyoder/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
  )
}

export default Header;
