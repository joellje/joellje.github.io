import React from "react";
import TypeIt from "typeit-react";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  const Title = ({ children }) => {
    return <strong style={{ fontSize: "70px" }}>{children}</strong>;
  };
  const Text = ({ children }) => {
    return <strong style={{ fontSize: "20px" }}>{children}</strong>;
  };
  return (
    <div
      className="h-screen flex flex-col justify-center tracking-wider items-center pb-20 text-white"
      id="hero"
    >
      <TypeIt
        options={{
          cursor: false,
        }}
      >
        <Title>Hello! I'm Joel.</Title>
        <br />
        <Text>Software Developer. Product Manager.</Text>
      </TypeIt>

      {/* <TypeIt
        className="text-5xl sm:text-6xl font-bold"
        getBeforeInit={(instance) => {
          instance
            .type("Hello! I'm Jole")
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
      /> */}
    </div>
  );
}
