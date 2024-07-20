import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { SiExpress, SiFlutter } from "react-icons/si";
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
        <div className="tech-stack grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-14 ">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="m-5 flex flex-row gap-2 items-center justify-start"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
