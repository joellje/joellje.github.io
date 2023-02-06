import React from "react";

export default function Card(props) {
  return (
    <>
      <div >
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
}
