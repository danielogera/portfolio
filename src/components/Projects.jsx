import React from 'react';

export function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
        <p>Skills used: React, JavaScript, HTML/CSS.</p>
        <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Visit Project 1</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of Project 2.</p>
        <p>Skills used: Python, Flask, MongoDB.</p>
        <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">Visit Project 2</a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}


