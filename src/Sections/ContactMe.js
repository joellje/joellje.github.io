import React from "react";
import profile from "../Assets/profile.png";

export default function ContactMe() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:h-screen items-center justify-center pb-10 sm:gap-24">
        <div>
          <img
            src={profile}
            alt="profile"
            className="w-64 sm:w-96 border-4 rounded-full bg-white"
          />
        </div>

        <div
          className="flex flex-col justify-center gap-4 text-white sm:w-1/2 sm:gap-10"
          id="contactme"
        >
          <h1 className="title">Contact Me</h1>
          <p className="text-lg: sm:text-xl">
            Please feel free to reach out to me regarding opportunities or
            conversations in the Tech Sector.
            <br />
            <br />
            I'd also love to chat about anything that interests you!
          </p>
          <div className="flex flex-row gap-3">
            <a
              href="https://drive.google.com/file/d/13TVsQWqiWX6UGBsCckxgtVwbHFvmuAkC/view?usp=sharing"
              target="_blank"
            >
              <button className="hover:scale-110 transition-all duration-200 ease-linear cursor-pointer bg-orange-600 rounded-md p-2 mt-2 items-center text-center">
                My Resume
              </button>
            </a>

            <a href="mailto:joellimjieen@hotmail.com" target="_blank">
              <button className="hover:scale-110 transition-all duration-200 ease-linear cursor-pointer bg-orange-600 rounded-md p-2 mt-2 items-center text-center">
                Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}