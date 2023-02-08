import { React, useState } from "react";
import Navbar from "./Navbar";
import logo from "../Assets/logo.png";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import NavMenu from "./NavMenu";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const onClickHandler = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log(isNavExpanded);
  };

  // const socials = [
  //   {
  //     name: "LinkedIn",
  //     icon: FaLinkedin,
  //     link: "https://www.linkedin.com/in/joel-lim-jie-en/",
  //   },
  //   {
  //     name: "Github",
  //     icon: FaGithub,
  //     link: "https://github.com/joellje",
  //   },
  // ];
  return (
    <>
      <div className="flex flex-row space-between fixed z-50 top-0 w-screen h-16 m-0 sm:justify-around items-center bg-blackk ">
        <img
          src={logo}
          alt="logo"
          className="pl-5 sm:h-16 w-16 hover:cursor-pointer"
          onClick={() =>
            document
              .getElementById("hero")
              .scrollIntoView({ behavior: "smooth" })
          }
        />

        <Navbar />
        <FiMenu
          className="fixed right-8 sm:hidden"
          onClick= {onClickHandler}
        />

        <div className="hidden sm:flex flex-row justify-around items-center gap-5">
          <a
            href="https://drive.google.com/file/d/13TVsQWqiWX6UGBsCckxgtVwbHFvmuAkC/view?usp=sharing"
            target="_blank"
          >
            <AiFillFileText className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
          </a>
          <a href="https://github.com/joellje" target="_blank">
            <FaGithubSquare className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-lim-jie-en/"
            target="_blank"
          >
            <FaLinkedinIn className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
          </a>
        </div>
      </div>

      <NavMenu isExpanded={isNavExpanded} onClickProp={onClickHandler}/>
    </>
  );
}
