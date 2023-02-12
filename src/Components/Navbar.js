import React from "react";
import NavbarIcon from "./NavbarIcon";

export default function Navbar() {
  return (
    <div className="hidden sm:gap-3 h-16 sm:flex flex-row items-center justify-around">
      <NavbarIcon text="About Me" />
      <NavbarIcon text="Projects" />
      <NavbarIcon text="Contact Me" />
    </div>
  );
}
