import React from "react";
import NavbarMenuIcon from "./NavbarMenuIcon";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";

export default function NavMenu(props) {
  return (
    <div
      className={`fixed flex flex-col w-full h-72 pt-16 z-40 bg-grayy ${
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
          href="https://drive.google.com/file/d/13TVsQWqiWX6UGBsCckxgtVwbHFvmuAkC/view?usp=sharing"
          target="_blank"
        >
          <AiFillFileText
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
          <FaLinkedinIn
            className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
            onClick={props.onClickProp}
          />
        </a>
      </div>
    </div>
  );
}
