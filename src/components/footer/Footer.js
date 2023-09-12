import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-b-black flex items-center py-8 justify-evenly">
      <img className="w-32" src={logo} alt="logo" />
      <div className="flex gap-4">
        <span
          className="bannerIcon"
          onClick={() =>
            window.open("https://www.facebook.com", "_blank", "noreferrer")
          }
        >
          <FaFacebookF />
        </span>
        <span
          className="bannerIcon"
          onClick={() =>
            window.open(
              "https://www.github.com/DevAnujV",
              "_blank",
              "noreferrer"
            )
          }
        >
          <FaGithub />
        </span>
        <span
          className="bannerIcon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/anujverma98/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  );
};

export default Footer;
