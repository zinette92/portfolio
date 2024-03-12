/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Skill from "../Skill/Skill";

export default function Modal(props) {
  const [isHovered, setIsHovered] = useState(false);

  if (props.open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    return null;
  }

  return (
    <div
      onClick={props.onClose}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed flex h-5/6 w-5/6 flex-col items-center gap-12 overflow-y-auto rounded bg-white pb-3 pt-2 pt-3 lg:w-3/6"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-0 top-0 mr-3 mt-3 h-6 w-6 cursor-pointer rounded-full p-1 text-black transition-colors duration-300 hover:bg-gray-200"
          onClick={props.onClose}
        />

        {/* Project title */}
        <div className="flex w-full flex-col items-center">
          <h3 className="text-2xl font-bold text-blue-700 lg:text-3xl">
            Booki
          </h3>
          <hr className="border-b-1 mt-2  w-[80%] border-gray-300" />
        </div>

        {/* Project links */}

        <div className="-mt-4 flex flex-col justify-center gap-4 md:flex-row">
          {/* Github link */}
          <a
            href={props.code}
            className="flex h-10 w-40 items-center justify-center rounded-full border-2 border-black text-xl font-bold text-black hover:bg-black hover:text-white"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-2 mt-1 h-5 w-5"
              onClick={props.onClose}
            />
            <p>Voir le code</p>
          </a>

          {/* Website link */}
          <a
            href={props.site}
            className="flex h-10 w-40 items-center justify-center rounded-full border-2 border-blue-500 text-xl font-bold text-blue-500 hover:bg-blue-500 hover:text-white"
            target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={`${isHovered ? "text-white" : "text-blue-500"} mr-2 mt-1 h-4 w-4`}
              onClick={props.onClose}
            />
            <p>Voir le site</p>
          </a>
        </div>

        {/* Project description */}
        <div className="-mt-4 flex w-[80%] flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-2 md:flex-row">
            <hr className="mt-1 hidden w-full  border-b-2 border-blue-500 md:inline" />
            <h4 className="text-center text-2xl font-bold">Description</h4>
            <hr className="mt-1 w-12 border-b-4 border-blue-500 md:w-full md:border-b-2" />
          </div>
          <div className="flex flex-col items-center gap-8">
            {props.description.map((paragraph, index) => (
              <p className=" text-sm md:text-base" key={index}>
                On sait depuis longtemps que travailler avec du texte lisible et
                contenant du sens est source de distractions, et empêche de se
                concentrer sur la mise en page elle-même. L'avantage du Lorem
                Ipsum sur un texte générique comme 'Du texte. Du texte. Du
                texte.' est qu'il possède une distribution de lettres plus ou
                moins normale, et en tout cas comparable avec celle du français
                standard. De nombreuses suites logicielles de mise en page ou
                éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte
                par défaut, et une recherche pour 'Lorem Ipsum' vous conduira
                vers de nombreux sites qui n'en sont encore qu'à leur phase de
                construction. Plusieurs versions sont apparues avec le temps,
                parfois par accident, souvent intentionnellement (histoire d'y
                rajouter de petits clins d'oeil, voire des phrases
                embarassantes).
              </p>
            ))}
          </div>
        </div>
        <div className="flex w-[80%] flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-2 md:flex-row">
            <hr className="mt-1 hidden w-full  border-b-2 border-blue-500 md:inline" />
            <h4 className="text-center text-2xl font-bold">Technologies</h4>
            <hr className="mt-1 w-12 border-b-4 border-blue-500 md:w-full md:border-b-2" />
          </div>
          <div className="w-full">
            <ul className="grid w-full grid-cols-2 gap-4  md:grid-cols-4 ">
              {props.skills.map((skill, index) => (
                <li
                  key={index}
                  className="h-24 flex-shrink-0 flex-grow-0 text-lg font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform hover:scale-110"
                >
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project images */}

        <div className="flex w-[80%] flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-2 md:flex-row">
            <hr className="mt-1 hidden w-full  border-b-2 border-blue-500 md:inline" />
            <h4 className="text-center text-2xl font-bold">Images</h4>
            <hr className="mt-1 w-12 border-b-4 border-blue-500 md:w-full md:border-b-2" />
          </div>
          <div className="grid w-full grid-cols-1 justify-center gap-8 md:grid-cols-2">
            {props.images.map((image, index) => (
              <img
                src={process.env.PUBLIC_URL + image}
                alt="Image de présentation"
                className="h-32 w-full cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                key={index}
              ></img>
            ))}
          </div>
          <div className="mt-8 flex justify-center font-medium">
            Réalisé en {props.date}
          </div>
        </div>
      </div>
    </div>
  );
}
