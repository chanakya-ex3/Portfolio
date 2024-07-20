import React, { useRef } from "react";
import { Preloader, Navbar } from "./Components";
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  CertificationsPage,
  ContactPage,
} from "./Pages";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const references = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    certifications: certificationsRef,
    contact: contactRef,
  };

  return (
    <>
      {/* <Preloader /> */}
      <Navbar references={references} />
      <div ref={homeRef}>
        <HomePage />
      </div>
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={skillsRef}>
        <SkillsPage />
      </div>
      <div ref={experienceRef}>
        <ExperiencePage />
      </div>
      <div ref={projectsRef}>
        <ProjectsPage />
      </div>
      <div ref={certificationsRef}>
        <CertificationsPage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </>
  );
};

export default App;
