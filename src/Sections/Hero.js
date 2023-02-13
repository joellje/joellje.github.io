import React from "react";
import TypeIt from "typeit-react";

export default function Hero() {
  const Title = ({ children }) => {
    return <strong style={{ fontSize: "70px" }}>{children}</strong>;
  };
  const Text = ({ children }) => {
    return (
      <strong style={{ fontSize: "22px", textAlign: "center" }}>
        {children}
      </strong>
    );
  };
  const subText = ({ children }) => {
    return <strong style={{ fontSize: "14px" }}>{children}</strong>;
  };
  return (
    <div
      className="h-screen flex flex-col tracking-wider items-center justify-center pb-20 text-white"
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
    </div>
  );
}
