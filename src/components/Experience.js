import React from 'react';

const Experience = ({ experiences }) => {
  // Add hardcoded experiences based on your resume
  const hardcodedExperiences = [
    {
      _id: 'exp1',
      title: 'Product Designer',
      company: 'Futura Fertility',
      startDate: 'Sep 2024',
      endDate: 'Dec 2024',
      description: 'Revamped content report UI design achieving a 90% approval rate from client stakeholders and successfully implemented redesign improving usability and visual clarity. Conducted user interviews and built personas to uncover core user pain points, laying a strong research foundation for the redesign. Mapped and analyzed key user flows and pain points in the web application, proposed targeted design recommendations leading to a 20% increase in user satisfaction and usability testing.'
    },
    {
      _id: 'exp2',
      title: 'UX Designer',
      company: 'Green Campus Co-op',
      startDate: 'Jan 2024',
      endDate: 'May 2024',
      description: 'Conducted competitive analysis and user interviews to identify usability issues, leading to a site map redesign that improved navigation and increased task completion by 30%. Redesigned UI elements, visual styling, and a cohesive design system to enhance brand awareness, resulting in a 15% increase in click-through rates.'
    },
    {
      _id: 'exp3',
      title: 'Content Creator',
      company: 'Duozhi Technology Co.',
      startDate: 'May 2022',
      endDate: 'Sep 2022',
      description: 'Created user-centered social media content, boosting audience by 1,000+ monthly. Collaborated with teams to produce consistent, user-centered digital content for posts needs, increasing weekly interactions by 15% and click rates by 10%.'
    }
  ];

  // Combine API experiences with hardcoded ones
  const allExperiences = experiences.length > 0 ? experiences : hardcodedExperiences;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="timeline">
          {allExperiences.map((exp, index) => (
            <div key={exp._id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-date">
                  {exp.startDate} - {exp.endDate || 'Present'}
                </p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;