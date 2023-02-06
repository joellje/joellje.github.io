import React from "react";
import Navbar from "./Navbar";
import logo from "../Assets/logo.png";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai"

export default function Header() {
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
      <div className="fixed z-50 top-0 w-screen h-16 m-0 flex flex-row justify-around items-center bg-blackk">
        <img
          src={logo}
          alt="logo"
          className="h-16 w-16 hover:cursor-pointer"
          onClick={() =>
            document
              .getElementById("hero")
              .scrollIntoView({ behavior: "smooth" })
          }
        />

        <Navbar />

        <div className="flex flex-row justify-around items-center gap-5">
          <a
            href="https://drive.google.com/file/d/13TVsQWqiWX6UGBsCckxgtVwbHFvmuAkC/view?usp=sharing"
            target="_blank"
          >
            <AiFillFileText className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer" />
          </a>
          <a href="https://github.com/joellje" target="_blank">
            <FaGithubSquare className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-lim-jie-en/"
            target="_blank"
          >
            <FaLinkedinIn className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}
