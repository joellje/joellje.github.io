import React from "react";

export default function NavbarIcon(props) {
  const title = props.text;
  const titleToIdMappings = {
    "About Me": "about",
    "Projects": "projects",
    "Contact Me": "contactme",
  };
  return (
    <>
      <div
        className="mx-2 w-1/3 items-center text-center hover:scale-110 transition-all duration-200 ease-linear cursor-pointer z-0 hover:text-orange-600"
        onClick={() =>
          document
            .getElementById(titleToIdMappings[title])
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <p className="">{props.text}</p>
      </div>
    </>
  );
}
