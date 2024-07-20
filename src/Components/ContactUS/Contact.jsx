import React from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div className=" pivot-point p-5 col-span-1 box-border h-fit bg-primary-light flex items-center justify-start flex-col  gap-10 ">
      <div>
        <h2 className="text-primary-dark text-center text-2xl font-bold sm:text-4xl md:text-5xl">
          Contact Me
        </h2>
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center gap-5">
        <div>
          <div className="flex flex-row flex-wrap gap-1">
            <p>Mobile:</p>
            <a className="font-medium no-underline" href="tel:+919941171757">9941171757</a>
          </div>
          <div className="flex flex-row flex-wrap gap-1">
            <p>Email:</p>
            <a href="mailto:chanakya.exe@gmail.com">chanakya.exe@gmail.com</a>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <SocialIcon url="www.linkedin.com" href="https://www.linkedin.com/in/chanakya-bhardwaj-m-4953b4232/" target="_blank" />
          <SocialIcon url="www.github.com"  href="https://github.com/chanakya-ex3" target="_blank"/>
          <SocialIcon url="www.leetcode.com" href="https://leetcode.com/u/chanakya-ex3/"  target="_blank"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
