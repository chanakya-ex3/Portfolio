import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import profile from "../../assets/profile.png";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  return (
    <div className="p-10 pivot-point h-full grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="rounded-3xl col-span-2 flex flex-col items-center justify-center md:justify-center gap-2">
        <img
          className="rounded-2xl max-h-[350px] sm:max-h-full"
          src={profile}
          width="800px"
          alt="profile"
        />
        <div>
          <p className="w-full text-primary-light dark:text-primary-dark font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Chanakya B M
          </p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center sm:items-start gap-4">
        <div>
          <p className="w-full text-primary-light dark:text-primary-dark font-bold text-3xl text-center sm:text-left sm:text-5xl lg:text-8xl">
            Hello! I am
          </p>
        </div>
        <div className="w-full text-purple font-bold text-3xl text-center sm:text-left sm:text-5xl lg:text-8xl">
          <Typewriter
            options={{
              strings: [
                "MERN Dev",
                "AWS Dev",
                "Flutter Dev",
                "Cloud Architect",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="w-full text-left ext-primary-light dark:text-primary-dark ">
          <p className="text-primary-light dark:text-primary-dark">Based in Chennai, India</p>
          <div className="flex flex-row flex-wrap gap-1">
            <p className="text-primary-light dark:text-primary-dark">Currently Interning at</p>
            <p className="text-primary-light dark:text-primary-dark">i4sight Technologies</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between ">
          <div className="w-full flex justify-evenly md:justify-start md:gap-2 ">
            <button className="bg-secondary-light text-primary-light dark:bg-secondary-dark dark:text-primary-dark border border-transparent rounded-3xl border-solid font-bold ">
              Contact
            </button>
            <button className="bg-secondary-dark text-primary-dark dark:bg-secondary-light dark:text-primary-light border border-transparent rounded-3xl border-solid font-bold ">
              Resume
            </button>
          </div>
          <div className="w-full flex gap-10 justify-around md:justify-end md:gap-2">
            <button className="border-none p-0 rounded-3xl ">
              <SocialIcon
                url="www.linkedin.com"
                href="https://www.linkedin.com/in/chanakya-bhardwaj-m-4953b4232/"
              />
            </button>
            <button className="border-none p-0 rounded-3xl">
              <SocialIcon
                url="www.github.com"
                href="https://github.com/chanakya-ex3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
