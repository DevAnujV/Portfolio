import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span
            className="bannerIcon"
            onClick={() => {
              window.open(
                "http://www.facebook.com/profile.php?id=100017780100073",
                "_blank",
                "noreferrer"
              );
            }}
          >
            <FaFacebookF />
          </span>
          <span
            className="bannerIcon"
            onClick={() => {
              window.open(
                "https://github.com/DevAnujV",
                "_blank",
                "noreferrer"
              );
            }}
          >
            <FaGithub />
          </span>
          <span
            className="bannerIcon"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/anujverma98/",
                "_blank",
                "noreferrer"
              );
            }}
          >
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
