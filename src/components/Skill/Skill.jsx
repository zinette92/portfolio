import React from "react";

export default function Skill(props) {
  return (
    <div className="flex h-full w-full transform flex-col items-center justify-around">
      {/* Displaying skill icon */}
      <img
        className="w-[22%] min-w-4 max-w-12 object-cover"
        src={process.env.PUBLIC_URL + "/assets/Skills/" + props.skill + ".webp"}
        alt={`Logo ${props.skill}`}
      ></img>
      {/* Displaying skill name */}
      <span>{props.skill}</span>
    </div>
  );
}
