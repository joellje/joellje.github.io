import React from "react";

export default function EducationCard(props) {
  return (
    <>
      <div className=" bg-blackk text-white w-full flex flex-row rounded-md px-4 py-4 border-2">
        <div className="flex justify-center items-center object-contain h-auto w-20 mr-4">
          <img src={props.image} alt="logo" className="" />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="font-bold">{props.name}</h1>
          <p>{props.programme}</p>
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}
