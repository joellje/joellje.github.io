import React from "react";
import EducationCard from "../Components/EducationCard";
import ntu from "../Assets/ntu.png";
import ucb from "../Assets/ucb.png";
import shopee from "../Assets/shopee.png";
import aspire from "../Assets/aspire.png";
import ExperienceCard from "../Components/ExperienceCard";
import { SiPostman } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import {
  JavaOriginalIcon,
  ReactOriginalIcon,
  Css3OriginalIcon,
  JavascriptOriginalIcon,
  MongodbOriginalIcon,
  PostgresqlOriginalIcon,
  Html5OriginalIcon,
  PythonOriginalIcon,
  GithubOriginalIcon,
  FirebasePlainIcon,
  NodejsOriginalIcon,
  TailwindcssPlainIcon,
  FigmaOriginalIcon,
  AmazonwebservicesOriginalIcon,
  AmazonwebservicesPlainWordmarkIcon,
  ExpressOriginalIcon,
  ExpressOriginalWordmarkIcon,
} from "react-devicons";

export default function About() {
  const educations = [
    {
      name: "University of California, Berkeley",
      programme:
        "Global Learning and Outreach from Berkeley Engineering (GLOBE) Exchange Programme",
      date: "Aug '22 - May '23",
      image: ucb,
    },
    {
      name: "Nanyang Technological University",
      programme: "Renaissance Engineering Programme",
      date: "Aug '20 - Present",
      image: ntu,
    },
  ];

  const experiences = [
    {
      name: "Shopee Pte Ltd",
      role: "Product Management Intern",
      description:
        "Initiated over 10 data-related projects as sole aggregator of User Data for over 350 million monthly visitors.",
      date: "May '22 - Aug '22",
      image: shopee,
      technologies: "Technologies: Jira, Confluence, Figma",
    },
    {
      name: "Aspire Financial Technologies Holding Inc.",
      role: "Backend Engineering Intern",
      description:
        "Maintained various REST APIs for core banking services handling over 2 billion dollars annually. ",
      date: "Feb '22 - Apr '22",
      image: aspire,
      technologies: "Technologies: Laravel, PostgreSQL, Git, Postman",
    },
    // {
    //   name: "Home Team Science and Technology Agency",
    //   role: "Data Fusion and Analytics Intern",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   date: "Dec '21 - Jan '22",
    //   image: htx,
    // },
  ];
  return (
    <div className="pt-16 text-white" id="about">
      <Fade>
        <div>
          <h1 className="title">About Me</h1>
          <p className="pt-5 text-sm sm:text-xl">
            As a Year 3 undergraduate in Nanyang Technological University's
            Renaissance Engineering Programme, I am pursuing a Masters in
            Technology Management and a Bachelors in Engineering Science
            (Computer Science). I'm currently studying in UC Berkeley as an
            exchange student for the year, and I'm looking for software
            engineering internships!
          </p>
          <p className="pt-5 text-sm sm:text-xl">
            In my free time, I like to play football and boulder. I also love
            watching anime.
          </p>
        </div>
      </Fade>
      {/* TODO: add names of icons on hover */}
      <Fade>
        <h1 className="title">Tech Stack</h1>
      </Fade>
      <Fade>
        <div className="grid grid-row-3 sm:grid-cols-3">
          <div>
            <p className="pt-5 text-xl sm:text-2xl">Languages</p>
            <div className="pt-2 grid grid-cols-3 gap-y-3">
              <JavaOriginalIcon size={64}/>
              <Html5OriginalIcon size={64} />
              <Css3OriginalIcon size={64} />
              <JavascriptOriginalIcon size={64} />
              <PythonOriginalIcon size={64} />
            </div>
          </div>
          <div>
            <p className="pt-5 text-xl sm:text-2xl">Frameworks / Libraries</p>
            <div className="pt-2 grid grid-cols-3 gap-y-3">
              <ExpressOriginalWordmarkIcon
                size={64}
                className=" bg-white rounded-full"
              />
              <ReactOriginalIcon size={64} />
              <NodejsOriginalIcon size={64} />
              <TailwindcssPlainIcon size={64} />
            </div>
          </div>
          <div>
            <p className="pt-5 text-xl sm:text-2xl">Tools</p>
            <div className="pt-2 grid grid-cols-3 gap-y-3">
              <GithubOriginalIcon size={64} color="#c9510c" />
              <MongodbOriginalIcon size={64} />
              <FirebasePlainIcon size={64} />
              <FigmaOriginalIcon size={64} />
              <SiPostman size={64} />
              <AmazonwebservicesPlainWordmarkIcon size={64} />
              <PostgresqlOriginalIcon size={64} />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-5">
          <div>
            <p className="pt-5 text-xl sm:text-2xl">Languages</p>
            <div className="pt-2 flex flex-row flex-wrap items-center gap-y-2">
              <JavaOriginalIcon size={64} />
              <Html5OriginalIcon size={64} className="ml-2" />
              <Css3OriginalIcon size={64} className="ml-2" />
              <JavascriptOriginalIcon size={64} className="sm:ml-2" />
              <PythonOriginalIcon size={64} className="ml-2" />
            </div>
          </div>
          
          <div>
            <p className="pt-5 text-xl sm:text-2xl">Tools</p>
            <div className="pt-2 flex flex-row flex-wrap gap-y-2 items-center">
              <GithubOriginalIcon size={64} color="#c9510c" />
              <MongodbOriginalIcon size={64} className="ml-2" />
              <FirebasePlainIcon size={64} className="ml-2" />
              <FigmaOriginalIcon size={64} className="sm:ml-2" />
              <SiPostman size={64} className="ml-2" />
              <AmazonwebservicesPlainWordmarkIcon size={64} className="ml-3" />
              <PostgresqlOriginalIcon size={64} className="sm:ml-2" />
            </div>
          </div>
        </div> */}
      </Fade>

      <Fade>
        <h1 className="title">Experience</h1>
        <Fade>
          <div className="pt-5 flex flex-col gap-2">
            {experiences.map((experience) => (
              <ExperienceCard
                name={experience.name}
                role={experience.role}
                date={experience.date}
                image={experience.image}
                description={experience.description}
                technologies={experience.technologies}
              />
            ))}
          </div>
        </Fade>
      </Fade>
      {/* TODO: Add responsiveness, improve cards, add favicon */}
      <Fade>
        <h1 className="title">Education</h1>
        <div className="pt-5 flex flex-col gap-2">
          {educations.map((education) => (
            <EducationCard
              name={education.name}
              image={education.image}
              date={education.date}
              programme={education.programme}
              description={education.description}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}