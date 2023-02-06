import React from "react";

export default function ProjectCard(props) {
  const url = props.url;
  return (
    <>
      <a href={url} target="_blank">
        <div className="bg-blackk text-white w-full flex flex-row justify-equal rounded-lg px-4 py-4 border-2 items-center hover:opacity-80 hover:shadow-lg">
          <div className="flex justify-center items-center object-contain w-32 mr-4">
            <img src={props.image} alt="logo" />
          </div>

          <div className="flex flex-col justify-center gap-1">
            <h1 className="font-bold">{props.name}</h1>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <p></p>
          </div>
        </div>
      </a>
    </>
  );
}
