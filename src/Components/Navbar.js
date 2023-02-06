import React from "react";
import NavbarIcon from "./NavbarIcon";

export default function Navbar() {
  return (
    <>
      <div className="gap-3 w-1/4 h-16 flex flex-row items-center justify-around">
        <NavbarIcon text="About Me" />
        <NavbarIcon text="Projects" />
        <NavbarIcon text="Contact Me" />
      </div>
    </>
  );
}
