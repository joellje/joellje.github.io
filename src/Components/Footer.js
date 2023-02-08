import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="font-bold text-sm sm:text-xl ">
        Made with ReactJS and TailwindCSS
      </div>
      <div className="mt-1 mb-1 text-sm sm:text-xl ">© Joel Lim 2023</div>
      <BsFillArrowUpCircleFill
        className="absolute right-5 bottom-100 text-2xl sm:text-3xl hover:scale-125 transition-all duration-200 ease-linear cursor-pointer sm:hover:text-orange-600"
        onClick={() =>
          document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
}
