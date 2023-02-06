import React from "react";
import { Formik, Field, Form } from "formik";
import profile from "../Assets/profile.png";

export default function ContactMe() {
  return (
    <>
      <div className="h-screen items-center justify-center flex flex-row">
        <div>
          <img
            src={profile}
            alt="logo"
            className="w-96 border-4 rounded-full bg-white"
          />
        </div>

        <div
          className="flex flex-col justify-center items-center text-white pl-5 w-1/2"
          id="contactme"
        >
          <h1 className="title">Contact Me</h1>
          <p className="pt-5 text-xl text-center">
            Please feel free to reach out to me regarding opportunities or
            conversations in the Tech Sector.
          </p>
          <p className="pt-2 text-xl text-center">
            I'd also love to chat about anything that interests you!
          </p>
          <div className="flex flex-row gap-3">
            <a
              href="https://drive.google.com/file/d/13TVsQWqiWX6UGBsCckxgtVwbHFvmuAkC/view?usp=sharing"
              target="_blank"
            >
              <button className="hover:scale-110 transition-all duration-200 ease-linear cursor-pointer bg-black rounded-md p-2 mt-2 items-center text-center">
                My Resume
              </button>
            </a>

            <a href="mailto:joellimjieen@hotmail.com" target="_blank">
              <button className="hover:scale-110 transition-all duration-200 ease-linear cursor-pointer bg-black rounded-md p-2 mt-2 items-center text-center">
                Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
