import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      date: "May 2024 - Present",
      title: "Software Development Intern",
      subtitle: "i4sight Technologies",
      description:
        "Developed dynamic, responsive UIs in a collaborative dev team. Utilized AWS to enhance project scalability, security, and performance. Contributed to code reviews and development process improvements.",
    },
    {
      date: "Aug 2023 - Nov 2023",
      title: "Application Developer Intern",
      subtitle: "Opera Project Management Consultants Pvt. Ltd.",
      description:
        "Developed a full-stack app with Flutter and Firebase. Implemented Firebase for backend functionality and security. Delivered high-quality software ahead of deadlines.",
    },
  ];

  return (
    <div className=" pivot-point w-full h-screen flex items-center justify-center flex-col  ">
      <p className="h-[20px] md:h-[120px]"></p>
      <h2 className="text-primary-light dark:text-primary-dark text-3xl sm:text-4xl md:text-5xl">
        Work Experience
      </h2>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="w-[90vw]">
          <VerticalTimeline>
            {experiences.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                date={event.date}
                dateClassName="text-primary-light dark:text-primary-dark"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentStyle={{
                  background: "transparent",
                  color: "#333",
                  backgroundColor: "",
                  borderRadius: "20px",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title font-semibold sm:text-2xl ">
                  {event.title},
                </h3>
                <h3 className="vertical-timeline-element-title font-bold sm:text-xl ">
                  {event.subtitle}
                </h3>
                <p className="sm:text-lg">{event.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
