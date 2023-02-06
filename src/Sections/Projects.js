import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Fade from "react-reveal/Fade";
import bulletin from "../Assets/bulletin.png"
import yummytummy from "../Assets/yummytummy.png"
import ucb from "../Assets/ucb.png";

export default function Projects() {
  const projects = [
    {
      name: "YummyTummy",
      description: "web app to discover new eateries in Singapore",
      date: "2021",
      url: "https://github.com/joellje/YummyTummy",
      image: ucb
    },
    {
      name: "Bulletin by Goldman Sachs",
      description:
        "web app that streamlines report generation process using a highly customizable, scalable, intuitive and automated report rendering solution",
      date: "2022",
      url: "https://github.com/joellje/Goldman-Sachs-Customizable-Reports-Renderer",
      image: ucb
    },
  ];

  return (
    <Fade left cascade>
      <div className="text-white pt-16 pb-16" id="projects">
        <h1 className="title">Projects</h1>
        <div className="pt-10 flex flex-col gap-1">
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              date={project.date}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}
