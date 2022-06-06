import React from 'react';
import { AboutMeSection } from '../components/AboutMeSection';
import { HeroSection } from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
