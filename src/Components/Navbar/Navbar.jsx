import React, { useState, useEffect } from "react";
const Navbar = ({ references }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef?.current.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="hidden md:block">
      <div
        className={` fixed top-0 left-0 w-full p-5 transition-all duration-300 ease-in-out font-bold text-lg text-blue-dark  dark:text-white flex flex-row items-center justify-center md:gap-5 lg:gap-10 rounded-md ${
          isScrolled ? "py-5 shadow-lg bg-opacity-50 w-fit" : "py-5"
        }`}
      >
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references.home);
          }}
        >
          Home
        </p>
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references?.about);
          }}
        >
          About
        </p>
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references.skills);
          }}
        >
          Skills
        </p>
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references.experience);
          }}
        >
          Experience
        </p>
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references.projects);
          }}
        >
          Projects
        </p>
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references.certifications);
          }}
        >
          Certifications
        </p>
        <p
          className="hover:text-blue-light hover:bg-gray-500 hover:bg-opacity-25 p-2 rounded-md  cursor-pointer"
          onClick={() => {
            scrollToSection(references.contact);
          }}
        >
          Contact Us
        </p>
      </div>
    </div>
  );
};

export default Navbar;
