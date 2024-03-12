import React from "react";

export default function Skill(props) {
  return (
    <div className="flex h-full w-full transform flex-col items-center justify-around">
      <img
        className="w-[22%] min-w-4 max-w-12"
        src={process.env.PUBLIC_URL + "/assets/Icons/" + props.skill + ".png"}
        alt={`Logo ${props.skill}`}
      ></img>
      <span>{props.skill}</span>
    </div>
  );
}
