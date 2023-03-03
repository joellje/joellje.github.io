import { React, useState } from "react";
import Navbar from "./Navbar";
import logo from "../Assets/logo.png";
import { FiMenu } from "react-icons/fi";
import NavMenu from "./NavMenu";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const onClickHandler = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log(isNavExpanded);
  };

  return (
    <>
      <div className="flex flex-row space-between fixed z-50 top-0 min-w-full h-16 sm:justify-around items-center bg-blackk ">
        <img
          src={logo}
          alt="logo"
          className="ml-5 sm:h-16 w-16 hover:cursor-pointer"
          onClick={() =>
            document
              .getElementById("hero")
              .scrollIntoView({ behavior: "smooth" })
          }
        />

        <Navbar />
        <FiMenu className="fixed right-5 z-50 sm:hidden" onClick={onClickHandler} />
      </div>

      <NavMenu isExpanded={isNavExpanded} onClickProp={onClickHandler} />
    </>
  );
}
