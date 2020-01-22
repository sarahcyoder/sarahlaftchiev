import React from 'react';

const Project = ( {title, url, label} ) => {

  return (
    <div className="project">
      <h3>{ title }</h3>
      <p><a href={ url } target="_blank" rel="noopener noreferrer">{label}</a></p>
    </div>
  )
}

export default Project;
