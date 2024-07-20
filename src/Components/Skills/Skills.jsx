import React from "react";
import { motion, useInView } from "framer-motion";
import ReactIcon from "../../assets/skillsIcons/react.png";
import NodeIcon from "../../assets/skillsIcons/node.png";
import ExpressIcon from "../../assets/skillsIcons/express.png";
import FlutterIcon from "../../assets/skillsIcons/flutter.png";
import TailWindIcon from "../../assets/skillsIcons/tailwindcss.png";
import FastAPIIcon from "../../assets/skillsIcons/fastAPI.png";
import MongoDBIcon from "../../assets/skillsIcons/mongodb.svg";
import FirebaseIcon from "../../assets/skillsIcons/firebase.jpeg";
import DynamoDBIcon from "../../assets/skillsIcons/dynamoDB.png";
import AWSIcon from "../../assets/skillsIcons/aws.png";
import CAIcon from "../../assets/skillsIcons/solutionsArchitect.jpeg";
import CDIcon from "../../assets/skillsIcons/cloudDev.png";

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const techStack = [
    { name: "React", icon: ReactIcon },
    { name: "Flutter", icon: FlutterIcon },
    { name: "Tailwind CSS", icon: TailWindIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "FastAPI", icon: FastAPIIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "Cloud Architecture", icon: CAIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Cloud Development", icon: CDIcon },
    { name: "DynamoDB", icon: DynamoDBIcon },
  ];

  return (
    <div className=" pivot-point w-full h-screen flex items-center justify-center flex-col ">
      <p className="h-[20px] md:h-[120px]"></p>
      <h2 className="text-primary-light dark:text-primary-dark text-center text-3xl sm:text-4xl md:text-5xl">
        Skills
      </h2>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <motion.ul
          ref={ref}
          className="tech-stack grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-4 md:gap-14 "
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techStack.map((tech) => (
            <motion.li
            key={tech.name}
            variants={item}
            whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            className="item sm:m-5 flex flex-col gap-2 items-center justify-center"
          >
              <img
                src={tech.icon}
                width={"50px"}
                className="rounded-3xl shadow-xl"
                alt={tech.name}
              />
              <div className="tech-name text-lg font-bold text-primary-light dark:text-primary-dark">
                {tech.name}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
