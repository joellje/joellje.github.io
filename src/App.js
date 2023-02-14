import "./App.css";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Sections/Hero";
import SideBar from "./Components/SideBar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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

      <div className="font-sans absolute text-white items-center flex flex-col min-w-full">
        <Header />
        <div className="h-screen flex-col w-11/12 sm:w-8/12 padding-auto text-white">
          <SideBar />
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
