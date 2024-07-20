import React, { useEffect, useRef } from "react";
import { Preloader, Navbar } from "./Components";
import { useFollowPointer } from "./useFollowerPoint";
import { motion, useScroll } from "framer-motion";
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
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3200);
  }, []);
  const { scrollYProgress } = useScroll();
  const mouseRef = useRef(null);
  const { x, y } = useFollowPointer(mouseRef);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const [preloader, setPreloader] = React.useState(true);


  const references = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    certifications: certificationsRef,
    contact: contactRef,
  };
  if (preloader) {
    return <Preloader />;
  } else {
    return (
      <>
        <motion.div
          ref={mouseRef}
          className="fixed box w-[10px] h-[10px] rounded-2xl bg-blue-light dark:bg-blue-dark z-50"
          style={{ x, y }}
        />
        <Navbar references={references} />
        <motion.div
          className="fixed top-0 left-0 right-0 h-[10px] dark:bg-blue-dark bg-blue-light origin-left"
          style={{ scaleX: scrollYProgress }}
        />
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
  }
};

export default App;
