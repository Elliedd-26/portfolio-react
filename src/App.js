import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const projectsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
      const experiencesResponse = await axios.get(`${process.env.REACT_APP_API_URL}/experiences`);
      
      setProjects(projectsResponse.data);
      setExperiences(experiencesResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;