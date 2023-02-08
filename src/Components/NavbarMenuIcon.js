import React from "react";

export default function NavbarMenuIcon(props) {
  const title = props.text;
  const titleToIdMappings = {
    "About Me": "about",
    Projects: "projects",
    "Contact Me": "contactme",
  };

  function onClickHandler() {
    document
      .getElementById(titleToIdMappings[title])
      .scrollIntoView({ behavior: "smooth" });
    props.onClickProp();
  }

  return (
    <>
      <div
        className="py-4 items-center text-center z-0"
        onClick={onClickHandler}
      >
        <p className="">{props.text}</p>
      </div>
    </>
  );
}
