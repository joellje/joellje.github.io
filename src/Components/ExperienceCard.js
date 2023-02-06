import React from "react";

export default function ExperienceCard(props) {
  return (
    <>
      <div className="bg-blackk text-white w-full flex flex-row justify-equal rounded-lg px-4 py-4 border-2 items-center">
        <div className="flex justify-center items-center object-contain w-32 mr-4">
          <img src={props.image} alt="logo" className="" />
        </div>

        <div className="flex flex-col ">
          <h1 className="font-bold">{props.name}</h1>
          <p>{props.role}</p>
          <p>{props.date}</p>
          <p>{props.description}</p>
          <p>{props.technologies}</p>
        </div>
      </div>
    </>
  );
}
