import React from "react";
import EducationCard from "../Components/EducationCard";
import ri from "../Assets/ri.jpg";
import ntu from "../Assets/ntu.png";
import ucb from "../Assets/ucb.png";
import shopee from "../Assets/shopee.jpg";
import aspire from "../Assets/aspire.jpg";
import htx from "../Assets/htx.png";
import ExperienceCard from "../Components/ExperienceCard";
import {
  DiJava,
  DiJsBadge,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiPython,
  DiReact,
  DiGithubFull,
  DiFirebase,
  DiMongodb,
} from "react-icons/di";
import { SiTailwindcss, SiFigma, SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Fade from "react-reveal/Fade";

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
      image: ucb,
    },
    {
      name: "Raffles Institution",
      programme: "Integrated Programme",
      date: "Jan 16 - May '17",
      image: ucb,
    },
  ];

  const experiences = [
    {
      name: "Shopee Pte Ltd",
      role: "Product Management Intern",
      description:
        "Initiated over 10 data-related projects as sole aggregator of User Data for over 350 million monthly visitors.",
      date: "May '22 - Aug '22",
      image: ucb,
      technologies: "Technologies: Jira, Confluence, Figma",
    },
    {
      name: "Aspire Financial Technologies Holding Inc.",
      role: "Backend Engineering Intern",
      description:
        "Maintained various REST APIs for core banking services handling over 2 billion dollars annually. ",
      date: "Feb '22 - Apr '22",
      image: ucb,
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
      <Fade left cascade>
        <div>
          <h1 className="title">About Me</h1>
          <p className="pt-5 text-xl">
            As a Year 3 undergraduate in Nanyang Technological University's
            Renaissance Engineering Programme, I am pursuing a Masters in
            Technology Management and a Bachelors in Engineering Science
            (Computer Science). I'm currently studying in UC Berkeley as an
            exchange student for the year, and I'm looking for software
            engineering internships!
          </p>
          <p className="pt-5 text-xl">
            In my free time, I like to play football and boulder. I also love
            watching anime.
          </p>
        </div>
        {/* TODO: allow icons to wrap and add hover animation */}
        <div>
          <h1 className="title">Tech Stack</h1>
          <div className="flex flex-col gap-5">
            <div>
              <p className="pt-5 text-2xl">Languages</p>
              <div className="pt-2 flex flex-row items-center">
                <DiJava size={64} />
                <DiHtml5 size={64} />
                <DiCss3 size={64} />
                <DiJsBadge size={64} />
                <DiPython size={64} />
                <DiPostgresql size={64} />
              </div>
            </div>
            <div>
              <p className="pt-5 text-2xl">Frameworks / Libraries</p>
              <div className="pt-2 flex flex-row items-center">
                <DiReact size={64} />
                <SiTailwindcss size={64} />
              </div>
            </div>
            <div>
              <p className="pt-5 text-2xl">Tools</p>
              <div className="pt-2 flex flex-row items-center">
                <DiGithubFull size={64} />
                <DiFirebase size={64} />
                <DiMongodb size={64} />
                <SiFigma size={64} />
                <SiPostman size={64} />
                <FaAws size={64} className="ml-3" />
              </div>
            </div>
          </div>

          {/* TODO: change to icons, maybe add proficiencies */}
        </div>

        <div>
          <h1 className="title">Experience</h1>
          <div className="pt-10 flex flex-col gap-1">
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
        </div>

        <div>
          <h1 className="title">Education</h1>
          <div className="pt-10 flex flex-col gap-1">
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
        </div>
      </Fade>

      {/* TODO: align dimensions of images */}
    </div>
  );
}
