import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

export default function Project(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="transform-gpu cursor-pointer transition-transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpenModal(true)}
      >
        <img
          src={process.env.PUBLIC_URL + props.projectCover}
          alt={props.projectTitle}
          className="h-96 w-96 rounded object-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        />
        <div
          className={`${isHovered ? "visible" : "hidden"} absolute inset-0 flex flex-col items-center rounded bg-blue-700 bg-opacity-90  px-4 py-4 transition-opacity`}
        >
          <h3 className="mb-2 text-2xl font-bold text-white">Booki</h3>
          <p className="flex h-5/6 w-full items-center justify-center text-center text-lg text-white">
            {props.projectPresentation}
          </p>
          <div className="flex w-full items-center justify-end gap-2">
            <p className=" text-white">Voir plus</p>
            <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-white" />
          </div>
        </div>
      </div>
      <Modal
        description={props.projectDescription}
        skills={props.projectSkills}
        code={props.projectCode}
        site={props.projectSite}
        images={props.projectImages}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
