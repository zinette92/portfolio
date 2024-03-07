import React from "react";

export default function Project(props) {
  return (
    <div className="transform-gpu transition-transform hover:scale-105">
      <a href={`${props.projectLink}`} target="_blank">
        <img
          src={process.env.PUBLIC_URL + props.projectCover}
          alt={props.projectTitle}
          className="h-96 w-96 rounded object-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 opacity-0 transition-opacity hover:opacity-50">
          <h3 className="mb-2 text-lg font-bold text-red-900">Booki</h3>
          <p className="text-black">Voici Booki</p>
        </div>
      </a>
    </div>
  );
}
