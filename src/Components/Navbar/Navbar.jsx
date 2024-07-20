import React, { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const Navbar = ({ references }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
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
    <div className="z-50">
      <div className="hidden md:block">
        <div
          className={` fixed top-0 left-0 w-full p-5 transition-all duration-300 ease-in-out font-bold text-lg text-blue-dark  dark:text-white flex flex-row items-center justify-center md:gap-4 lg:gap-10 rounded-md ${
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
              scrollToSection(references.certifications);
            }}
          >
            Certifications
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
              scrollToSection(references.contact);
            }}
          >
            Contact Us
          </p>
        </div>
      </div>
      <div className="md:hidden w-screen">
        <nav
          className={` menu fixed top-4 left-0 font-bold text-lg text-blue-dark  dark:text-white
          }`}
          ref={scope}
        >
          <div
            style={{
              position: "fixed",
              bottom: -210,
              left: 200,
              width: 100,
              height: 100,
              background: "white",
            }}
          />
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
              <FaBars />
            </div>
          </motion.button>
          <ul
            className="flex flex-col gap-2 p-4 w-screen items-center justify-center bg-secondary-light dark:bg-secondary-dark"
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              clipPath: "inset(10% 50% 90% 50% round 10px)",
            }}
          >
            <li
              onClick={() => {
                scrollToSection(references.home);
                setIsOpen(!isOpen);
              }}
            >
              Home{" "}
            </li>
            <li
              onClick={() => {
                scrollToSection(references.about);
                setIsOpen(!isOpen);
              }}
            >
              About{" "}
            </li>
            <li
              onClick={() => {
                scrollToSection(references.skills);
                setIsOpen(!isOpen);
              }}
            >
              Skills{" "}
            </li>
            <li
              onClick={() => {
                scrollToSection(references.experience);
                setIsOpen(!isOpen);
              }}
            >
              Experience{" "}
            </li>
            <li
              onClick={() => {
                scrollToSection(references.certifications);
                setIsOpen(!isOpen);
              }}
            >
              Certifications{" "}
            </li>
            <li
              onClick={() => {
                scrollToSection(references.projects);
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                scrollToSection(references.contact);
                setIsOpen(!isOpen);
              }}
            >
              Contact Us
            </li>
          </ul>{" "}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
