import "./App.css";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Sections/Hero";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div className="absolute">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#18191a",
              },
            },
            fpsLimit: 80,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#A1A1A1",
              },
              links: {
                color: "#A1A1A1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
            fullScreen: true,
          }}
        ></Particles>
      </div>

      <div className="font-sans absolute w-screen text-white items-center flex flex-col">
        <Header />
        <div className="h-screen flex-col w-9/12 sm:w-8/12 padding-auto text-white">
          <div className="hidden sm:flex flex-col fixed right-5 bottom-5 sm:text-3xl z-49 justify-around items-center gap-3">
            <a
              href="https://drive.google.com/file/d/13TVsQWqiWX6UGBsCckxgtVwbHFvmuAkC/view?usp=sharing"
              target="_blank"
              id="resume"
              data-tooltip-content="My Resume"
              data-tooltip-place="left"
            >
              <FaFileAlt className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
            </a>
            <a
              href="https://github.com/joellje"
              target="_blank"
              id="github"
              data-tooltip-content="Github"
              data-tooltip-place="left"
            >
              <FaGithubSquare className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/joel-lim-jie-en/"
              target="_blank"
              id="linkedin"
              data-tooltip-content="LinkedIn"
              data-tooltip-place="left"
            >
              <FaLinkedin className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer hover:text-orange-600" />
            </a>
            <div>
              <BsFillArrowUpCircleFill
                id="scroll"
                data-tooltip-content="Scroll to Top"
                data-tooltip-place="left"
                className="sm:text-3xl  hover:scale-125 transition-all duration-200 ease-linear cursor-pointer sm:hover:text-orange-600"
                onClick={() =>
                  document
                    .getElementById("hero")
                    .scrollIntoView({ behavior: "smooth" })
                }
              />
              <Tooltip anchorId="resume" style={{ fontSize: "18px" }} />
              <Tooltip anchorId="github" style={{ fontSize: "18px" }} />
              <Tooltip anchorId="linkedin" style={{ fontSize: "18px" }} />
              <Tooltip anchorId="scroll" style={{ fontSize: "18px" }} />
            </div>
          </div>

          <Hero />
          <div className="bg-blackk px-10">
            <About />
            <Projects />
            <ContactMe />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
