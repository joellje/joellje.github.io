import React from "react";
import { Fade } from "react-awesome-reveal";

export default function ExperienceCard(props) {
  return (
    <>
      <Fade triggerOnce={true} cascade>
        <div className="hidden font-['Fira_Sans'] bg-gradient-to-br from-blackk via-grayy to-blackk bg-cover bg-center text-white w-full h-56 sm:flex flex-row justify-equal rounded-lg px-4 py-4 border-2 items-center">
          <div className="flex justify-center items-center object-contain w-32 mr-4 w-1/4">
            <img src={props.image} alt="logo" className="w-1/2" />
          </div>

          <div className="flex flex-col gap-2 w-2/3">
            <h1 className="font-bold text-2xl">{props.name}</h1>
            <p className="text-lg">{props.role}</p>
            <p className="text-xs text-slate-400">{props.date}</p>
            <p className="text-md">{props.description}</p>
            {/* <p>{props.technologies}</p> */}
          </div>
        </div>

        <div className="flex sm:hidden bg-blackk text-white w-full flex-col justify-equal rounded-lg px-4 py-4 border-2 items-center">
          <div className="flex justify-center items-center object-contain w-32 mr-4">
            <img src={props.image} alt="logo" className="" />
          </div>

          <div className="flex w-11/12 flex-col gap-1 pt-4">
            <h1 className="font-bold text-lg">{props.name}</h1>
            <p>{props.role}</p>
            <p>{props.date}</p>
            {/* <p>{props.description}</p> */}
            {/* <p>{props.technologies}</p> */}
          </div>
        </div>
      </Fade>
    </>
  );
}
