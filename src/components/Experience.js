import React, { useState, useEffect } from 'react';

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('https://ellie-portfolio-api.onrender.com/api/experiences')
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error('Error fetching experiences:', err));
  }, []);

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.length === 0 ? (
        <p>Loading...</p>
      ) : (
        experiences.map((exp) => (
          <div key={exp._id}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.description}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Experience;
