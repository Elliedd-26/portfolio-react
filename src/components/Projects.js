import React from 'react';

const Projects = ({ projects }) => {
  // Enhanced projects with professional images and details
  const hardcodedProjects = [
    {
      _id: 'sample1',
      title: 'E-Commerce Platform',
      description: 'A modern full-stack e-commerce solution with seamless user experience, built with React and Node.js',
      link: 'https://github.com/Elliedd-26/ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      _id: 'sample2',
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and intuitive interface design',
      link: 'https://github.com/Elliedd-26/taskmanager',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80'
    }
  ];

  // Combine API projects with hardcoded ones
  const allProjects = [...projects, ...hardcodedProjects];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="projects-grid">
          {allProjects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'} 
                  alt={project.title}
                />
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.technologies && (
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;