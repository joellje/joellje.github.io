import React from "react";
import { Fade } from "react-awesome-reveal";

export default function EducationCard(props) {
  return (
    <>
      <Fade triggerOnce={true} cascade>
        <div className="hidden font-['Fira_Sans'] bg-gradient-to-br from-blackk via-grayy to-blackk bg-cover bg-center text-white w-full h-56 sm:flex flex-row justify-equal rounded-lg px-4 py-4 border-2 items-center">
          <div className="flex justify-center items-center object-contain w-32 mr-4 w-1/4">
            <img src={props.image} alt="logo" className="w-1/2" />
          </div>

          <div className="flex flex-col justify-center gap-2 overflow-auto w-2/3">
            <h1 className="font-bold text-2xl">{props.name}</h1>
            <p className="text-lg">{props.programme}</p>
            <p className="text-xs text-slate-400">{props.date}</p>
            <p className="text-md break-normal">
              Relevant Coursework: {props.coursework}
            </p>
          </div>
        </div>

        <div className="flex h-70 font-['Fira_Sans'] sm:hidden bg-gradient-to-br from-blackk via-grayy to-blackk bg-cover bg-center text-white w-full flex-col justify-center rounded-lg px-2 py-4 border-2 items-center">
          <div className="flex justify-center items-center object-contain w-32">
            <img src={props.image} alt="logo" className="w-1/2" />
          </div>

          <div className="mt-2 flex w-11/12 flex-col gap-1 pt-4">
            <h1 className="font-bold text-base">{props.name}</h1>
            <p className="text-sm">{props.programme}</p>
            <p className="text-xxs text-slate-400">{props.date}</p>
            <p className="text-xs">{props.description}</p>
          </div>
        </div>
      </Fade>
    </>
  );
}
