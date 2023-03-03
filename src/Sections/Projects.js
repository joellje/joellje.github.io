import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { Fade } from "react-awesome-reveal";
import bulletinss from "../Assets/bulletinss.png";
import yummytummyss from "../Assets/yummytummyss.png";
import todoss from "../Assets/todologin.png";

export default function Projects() {
  const projects = [
    {
      name: "YummyTummy",
      description: "Web app to discover new eateries all over the world",
      url: "https://github.com/joellje/YummyTummy",
      image: yummytummyss,
      technologies: "React.js, Firebase, Google Maps API",
    },
    {
      name: "Bulletin by Goldman Sachs",
      description: "Web app that streamlines excel report generation process",
      url: "https://github.com/joellje/Goldman-Sachs-Customizable-Reports-Renderer",
      image: bulletinss,
      technologies: "React.js, Spring Boot, FastAPI, AWS",
    },
    {
      name: "Todo",
      description: "Mobile/ Web app that helps you to manage your todos",
      url: "https://github.com/joellje/todo",
      image: todoss,
      technologies: "React.js/ SwiftUI, Express, Node.js, MongoDB",
    },
    // {
    //   name: "BoulderBuddy",
    //   description:
    //     "Mobile app that serves as the perfect tool for avid climbers",
    //   url: "https://github.com/joellje/BoulderBuddy",
    //   image: bulletinss,
    //   technologies:
    //     "SwiftUI, Express, Node.js, MongoDB, AWS (Work-in-Progress)",
    // },
  ];

  return (
    <Fade triggerOnce={true}>
      <div className="text-white pt-16 pb-16" id="projects">
        <h1 className="title">Projects</h1>
        <div className="pt-6  flex flex-col gap-5 font-['Fira_Sans']">
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              date={project.date}
              image={project.image}
              url={project.url}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}
