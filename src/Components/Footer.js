import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="font-bold">Made with ReactJS and TailwindCSS</div>
      <div className="mt-1 mb-1">© Joel Lim 2023</div>
      <BsFillArrowUpCircleFill
        className="absolute right-5 text-3xl"
        onClick={() =>
          document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
    // TODO: Footer CSS
  );
}
