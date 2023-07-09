import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

export default function ExperienceCard() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="hidden sm:flex flex-col fixed right-5 bottom-5 sm:text-3xl z-49 justify-around items-center gap-3">
      <BsFillArrowUpCircleFill
        id="scroll"
        data-tooltip-content="Scroll to Top"
        data-tooltip-place="left"
        className={`sm:text-3xl  hover:scale-125 transition-all duration-200 ease-linear cursor-pointer sm:hover:text-orange-600 ${
          visible ? "" : "hidden"
        }`}
        onClick={() =>
          document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
        }
      />
      <a
        href="https://drive.google.com/file/d/1WcRtD13QAJMPrFu36bmSnBBWmy2DMUDb/view?usp=sharing"
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

      <Tooltip anchorId="resume" style={{ fontSize: "18px" }} />
      <Tooltip anchorId="github" style={{ fontSize: "18px" }} />
      <Tooltip anchorId="linkedin" style={{ fontSize: "18px" }} />
      <Tooltip anchorId="scroll" style={{ fontSize: "18px" }} />
    </div>
  );
}
