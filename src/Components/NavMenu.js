import React from "react";
import NavbarMenuIcon from "./NavbarMenuIcon";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from "react-icons/fa";

export default function NavMenu(props) {
  return (
    <div
      className={`fixed flex flex-col min-w-full h-72 pt-16 z-40 bg-grayy ${
        props.isExpanded ? "" : "hidden"
      }`}
    >
      <div>
        <NavbarMenuIcon text="About Me" onClickProp={props.onClickProp} />
        <NavbarMenuIcon text="Projects" onClickProp={props.onClickProp} />
        <NavbarMenuIcon text="Contact Me" onClickProp={props.onClickProp} />
      </div>
      <div className="flex flex-row w-full justify-center items-center gap-10 mt-4 text-lg">
        <a
          href="https://drive.google.com/file/d/1WcRtD13QAJMPrFu36bmSnBBWmy2DMUDb/view?usp=sharing"
          target="_blank"
        >
          <FaFileAlt
            className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
            onClick={props.onClickProp}
          />
        </a>
        <a href="https://github.com/joellje" target="_blank">
          <FaGithubSquare
            className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
            onClick={props.onClickProp}
          />
        </a>
        <a href="https://www.linkedin.com/in/joel-lim-jie-en/" target="_blank">
          <FaLinkedin
            className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
            onClick={props.onClickProp}
          />
        </a>
      </div>
    </div>
  );
}
