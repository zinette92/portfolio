import React from "react";

export default function Skill(props) {
  return (
    <div className="flex h-24 w-32 transform flex-col items-center  justify-around shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform hover:scale-110">
      <img
        className="h-8 w-8"
        src={process.env.PUBLIC_URL + "/assets/Icons/" + props.skill + ".png"}
        alt={`Logo ${props.skill}`}
      ></img>
      <span>{props.skill}</span>
    </div>
  );
}
