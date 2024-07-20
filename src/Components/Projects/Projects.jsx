import React from "react";
import {motion} from 'framer-motion'
import ProjectCard from "./ProjectCard/ProjectCard";
import Coming from "../../assets/projects/coming.png";
import Chatbot from "../../assets/projects/chatbot.png";
import CodeBlock from "../../assets/projects/codeblock.png";
import SmartChat from "../../assets/projects/SmatChatAI.png";

const Projects = () => {
  const projects = [
    {
      image: Coming,
      title: "DataSpark(Ongoing)",
      description: [
        "Allows CSV file uploads and predicts if datasets are suitable for classification or regression.",
        "Provides insights like missing value analysis, outlier analysis, and class imbalance.",
        "Compares and reports model performance on different datasets.",
        "Developed using React, Node.js, Express.js, MongoDB, FastAPI, and Machine Learning.",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "FastAPI"],
      timeline: "July, 2024 - Present",
      githubLink: "https://github.com/chanakya-ex3/DataSpark",
    },
    {
      image: CodeBlock,
      title: "CodeBlock",
      description: [
        "Facilitates seamless code sharing and collaboration.",
        "Developed with Flutter for cross-platform compatibility.",
        "Utilized Firebase for real-time database and authentication.",
        "Hosted on Firebase for scalability and security.",
      ],

      techStack: ["Flutter", "Firebase"],
      timeline: "Apr, 2024 - May, 2024",
      hostURL: "https://codeblock-db5be.web.app/",
    },
    {
      image: Chatbot,
      title: "HealthCare Chatbot",
      description: [
        "Developed chatbot using Amazon Lex, AWS Lambda, and DynamoDB.",
        "Conducts health assessments, suggests medications, fitness tips, and schedules appointments.",
        "Stores appointment data in DynamoDB via Lambda.",
        "Enhanced user experience with personalized health advice and scheduling.",
      ],
      techStack: ["Amazon Lex", "Lambda", "DynamoDB"],
      timeline: "Feb, 2024 - Mar, 2024",
    },
    {
      image: SmartChat,
      title: "SmartChat: AI-Driven Conversational and Visual Interaction",
      description: [
        "Developed an intelligent chatbot application using OpenAI API for text and image generation.",
        "Built with Flutter for a seamless cross-platform experience.",
        "Implemented user authentication using Firebase Auth for secure access.",
        "Stored user messages securely with Cloud Firestore.",
        "Includes support for voice interaction for enhanced user engagement.",
      ],
      techStack: ["Flutter", "Firebase", "OpenAI API"],
      timeline: "Oct, 2023 - Nov, 2023",
      githubLink: "https://github.com/chanakya-ex3/AI app",
    },
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (val) => {
    if(index===0 && val===-1){
      setIndex(projects.length-1);
      return;
    }
    setIndex((index + val) % projects.length);
  };
  return (
    <div className="pivot-point w-full h-screen flex items-center justify-center flex-col ">
      <p className="h-[20px] md:h-[120px]"></p>
      <h2 className="text-primary-light dark:text-primary-dark text-center text-3xl sm:text-4xl md:text-5xl">
        Projects
      </h2>
      <motion.div className=" hidden 2xl:flex flex-row gap-2 w-full h-full items-center justify-evenly">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </motion.div>
      <div className="2xl:hidden flex flex-col flex-wrap gap-2 w-full h-full items-center justify-evenly">
      <ProjectCard {...projects[index]} key={projects[index].title} />
      <div className="w-full flex flex-row justify-evenly">
        <button className="m-2 bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark" onClick={()=>{handleChange(-1)}}>Prev</button>
        <button className="m-2 bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark" onClick={()=>{handleChange(+1)}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default Projects;
