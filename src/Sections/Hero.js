import React from "react";
import TypeIt from "typeit-react";

export default function Hero() {
  // TODO: Add particles??
  return (
    <div
      className="h-screen flex flex-col justify-center items-center pb-20 text-white"
      id="hero"
    >
      {/* <TypeIt>
        <SuperStrong>Hi, I'm Joel!</SuperStrong>

        
      </TypeIt>
      <TypeIt>Software Developer. Product Manager.</TypeIt> */}

      <TypeIt
        className="text-6xl font-bold text-gray"
        getBeforeInit={(instance) => {
          instance
            .type("Hello, I'm Jole")
            .pause(750)
            .delete(2)
            .pause(500)
            .type("el!")
            .break()
            .pause(500)
            .break()
            .pause(50)
            .type("Software Developer. ")
            .break()
            .pause(50)
            .type("Product Manager.");
          // Remember to return it!
          return instance;
        }}
      />
    </div>
  );
}
