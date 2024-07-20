import React from "react";
import { motion, useInView} from "framer-motion";
import CP from "../../assets/certifications/AWSCP.png";
import SAA from "../../assets/certifications/AWSAA.png";
import DVA from "../../assets/certifications/AWSDVA.png";

const Certifications = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      icon: DVA,
      date: "June 2024 - June 2027",
      url: "https://www.credly.com/badges/10c85d3d-10b8-46a6-a0c5-a91653ce1186/public_url",
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      icon: SAA,
      date: "Jan 2024 - Jan 2027",
      url: "https://www.credly.com/badges/25b17ff5-f1a9-46c9-856f-d10f83778c33/public_url",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      icon: CP,
      date: "Nov 2023 - June 2027",
      url: "https://www.credly.com/badges/a53f7448-b1d9-48cc-9b0b-c4d95d566956/public_url",
    },
  ];
  return (
    <div className=" pivot-point w-full h-screen flex items-center justify-center flex-col  ">
      <p className="h-[20px] md:h-[120px]"></p>
      <h2 className="text-primary-light dark:text-primary-dark text-center text-3xl sm:text-4xl md:text-5xl">
        Certitications
      </h2>
      <motion.ul ref={ref}
        className="container flex flex-col sm:flex-row sm:w-[80vw] h-full items-center justify-between"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {certifications.map((cert) => (
          <motion.li
            key={cert.name}
            variants={item}
            className="item  sm:m-5 flex flex-col gap-2 items-center justify-center"
          >
            <img
              src={cert.icon}
              className="rounded-3xl w-[40%] sm:w-[348px]"
              alt={cert.name}
            />
            <a
              className="text-primary-light dark:text-primary-dark font-bold text-xl text-center hover:text-blue-dark "
              href={cert.url}
              target="_blank"
            >
              {cert.name}
            </a>
            <p className="text-primary-light dark:text-primary-dark text-base font-medium text-center">
              {cert.date}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Certifications;
