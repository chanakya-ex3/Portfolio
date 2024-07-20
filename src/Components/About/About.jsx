import React from "react";
import Profile2 from "../../assets/profile2.png";
const About = () => {
  return (
    <div className="pivot-point w-full h-screen flex items-center justify-center flex-col ">
      <p className="h-[20px] md:h-[120px]"></p>
      <h2 className="text-primary-light dark:text-primary-dark text-center text-3xl sm:text-4xl md:text-5xl">
        About Me
      </h2>
      <div className=" hidden md:flex flex-row gap-2 w-full h-full items-center justify-evenly">
        <div className="w-1/2">
          <p className="text-primary-light dark:text-primary-dark text-sm lg:text-lg  text-justify">{`Hi, I’m Chanakya Bhardwaj Mudunuru, a Full Stack Developer passionate about Machine Learning and Cloud Technologies. Currently pursuing a B.Tech in Computer Science & Engineering at Vellore Institute of Technology, I am dedicated to mastering the latest technological advancements.

              I specialize in creating engaging and responsive user interfaces with React.js and Flutter, using Tailwind CSS for sleek, efficient designs. On the back-end, I work with Node.js, Express.js, and FastAPI to build scalable, robust server-side solutions. My database expertise spans MongoDB, Firebase, OracleSQL, and PostgreSQL, and I am proficient in AWS for cloud architecture and development.

              Certified as an AWS Developer Associate, Solutions Architect Associate, and Cloud Practitioner, I leverage these skills to enhance my projects and deliver high-quality solutions. My work reflects a strong foundation in both technology and practical application, and I am committed to pushing the boundaries of innovation.

              If you’re looking for a versatile developer with a passion for cutting-edge technology, I’m here to help bring your ideas to life.

`}</p>
        </div>
        <div>
          <img
            src={Profile2}
            className="rounded-full shadow-xl w-[400px] md:w-[300px] lg:w-[400px]"
            alt="profile"
          />
          <p className="text-primary-light dark:text-primary-dark text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize">
            I can write good code
          </p>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-2 w-full h-full items-center justify-evenly">
        <div>
          <img
            src={Profile2}
            className="rounded-full w-[200px] shadow-xl"
            alt="profile"
          />
          <p className="text-primary-light dark:text-primary-dark text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize">
            I can write good code
          </p>
        </div>
        <div className="w-3/4 md:w-1/2">
          <p className="text-primary-light dark:text-primary-dark text-lg text-justify">{`Full Stack Developer (VIT, Chennai) with a passion for ML and Cloud. Certified AWS Developer & Solutions Architect, building robust & scalable solutions across frontend, backend, and cloud infrastructure.`}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
