import React from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '../components/HeroSection';

const AboutMeSection = dynamic(
  () => import('../components/AboutMeSection').then(mod => mod.AboutMeSection),
  { ssr: false }
);
const ProjectsSection = dynamic(
  () => import('../components/ProjectsSection'),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import('../components/ContactSection'),
  { ssr: false }
);

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
