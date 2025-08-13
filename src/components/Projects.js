import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://ellie-portfolio-api.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        projects.map((project) => (
          <div key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Projects;
