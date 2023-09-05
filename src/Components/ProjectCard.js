import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectCard(props) {
  const url = props.url;
  return (
    <>
      <Fade triggerOnce={true}>
        <div className="hidden font-['Fira_Sans'] bg-gradient-to-br from-blackk via-grayy to-blackk bg-cover bg-center text-white w-full flex-wrap sm:flex flex-row justify-equal rounded-lg px-4 py-4 border-2 items-center">
          <div className="flex justify-center items-center object-contain mr-4 w-1/4">
            <img src={props.image} alt="logo" className="" />
          </div>

          <div className="flex flex-col justify-center gap-2">
            <h1 className="font-bold text-2xl">{props.name}</h1>
            <p className="text-lg">{props.description}</p>
            <p className="text-xs text-slate-400">
              Made with {props.technologies}
            </p>
            <a href={url} target="_blank" className="text-3xl">
              <FaGithubSquare className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
            </a>
          </div>
        </div>

        <a href={url} target="_blank">
          <div className="flex h-70 font-['Fira_Sans'] sm:hidden bg-gradient-to-br from-blackk via-grayy to-blackk bg-cover bg-center text-white w-full flex-col justify-center rounded-lg px-2 py-4 border-2 items-center">
            <div className="flex justify-center items-center object-contain w-32">
              <img src={props.image} alt="logo" className="" />
            </div>

            <div className="mt-2 flex w-11/12 flex-col gap-1 pt-4">
              <h1 className="font-bold text-base">{props.name}</h1>
              <p className="text-xs">{props.description}</p>
              <p className="text-xxs text-slate-400">
                Made with {props.technologies}
              </p>
              <a href={url} target="_blank" className="text-3xl">
                <FaGithubSquare className="cursor-pointer" />
              </a>
            </div>
          </div>
        </a>
      </Fade>
      {/* TODO: GH Icon for link */}
    </>
  );
}
