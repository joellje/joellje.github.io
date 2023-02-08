import React from "react";
import { Fade } from "react-awesome-reveal";

export default function EducationCard(props) {
  return (
    <>
      <Fade>
        <div className="hidden bg-blackk text-white w-full sm:flex flex-row justify-equal rounded-lg px-4 py-4 border-2 items-center hover:opacity-80 hover:shadow-lg">
          <div className="flex justify-center items-center object-contain w-32 mr-4">
            <img src={props.image} alt="logo" className="" />
          </div>

          <div className="flex flex-col justify-center gap-1">
            <h1 className="font-bold">{props.name}</h1>
            <p>{props.programme}</p>
            <p>{props.date}</p>
            <p>{props.description}</p>
          </div>
        </div>

        <div className="flex bg-blackk text-white w-full sm:hidden flex-col justify-equal rounded-lg px-4 py-4 border-2 items-center hover:opacity-80 hover:shadow-lg">
          <div className="flex justify-center items-center object-contain w-32 mr-4">
            <img src={props.image} alt="logo" className="" />
          </div>

          <div className="flex w-11/12 flex-col gap-1 pt-4">
            <h1 className="font-bold text-lg">{props.name}</h1>
            <p>{props.programme}</p>
            <p>{props.date}</p>
            <p>{props.description}</p>
          </div>
        </div>
      </Fade>
    </>
  );
}
