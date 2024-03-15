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
      {/* Project card */}
      <div
        className="h-96 cursor-pointer caret-transparent lg:transform-gpu lg:transition-transform lg:hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpenModal(true)}
      >
        {/* Project cover image */}
        <img
          src={process.env.PUBLIC_URL + props.projectCover}
          alt={props.projectTitle}
          className="h-full w-full rounded object-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        />
        {/* Project details on hover */}
        <div
          className={`${isHovered ? "lg:visible lg:bg-opacity-90" : "hidden"} absolute inset-0 flex flex-col items-center rounded bg-blue-700 px-4 py-4 transition-opacity`}
        >
          <h3 className="mb-2 text-2xl font-bold text-white">
            {props.projectTitle}
          </h3>
          <p className="flex h-5/6 w-full items-center justify-center text-center text-lg text-white">
            {props.projectPresentation}
          </p>
          <div className="flex w-full items-center justify-end gap-2">
            <p className=" text-white">Voir plus</p>
            <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-white" />
          </div>
        </div>
      </div>
      {/* Modal to detailed project view */}
      <Modal
        title={props.projectTitle}
        description={props.projectDescription}
        skills={props.projectSkills}
        code={props.projectCode}
        site={props.projectSite}
        date={props.projectDate}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
