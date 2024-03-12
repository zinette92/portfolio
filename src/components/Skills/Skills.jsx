import React from "react";
import Skill from "../Skill/Skill";
import MySkills from "../../data/skills.json";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-fit flex-col items-center gap-12 bg-gray-100 pb-12 pt-8"
    >
      <h2 className="text-4xl font-bold">Mes compétences</h2>

      <div className="flex w-[90%] flex-col items-center gap-8 md:items-start">
        {/* <div className="flex w-fit flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Front-end</h3>
            <hr className="mt-2 w-8  border-b-4 border-blue-500" />
          </div>
          <div className="flex w-full gap-4">
            <ul className="flex flex-wrap justify-center gap-2 lg:justify-start lg:gap-8">
              {MySkills[0].frontend.map((skill, index) => (
                <li key={index}>
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-fit flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Back-end</h3>
            <hr className="mt-2 w-8  border-b-4 border-yellow-500" />
          </div>
          <div className="flex w-full gap-4">
            <ul className="flex flex-wrap justify-center gap-2 lg:justify-start lg:gap-8">
              {MySkills[0].backend.map((skill, index) => (
                <li key={index}>
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-fit flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Base de données</h3>
            <hr className="mt-2 w-8  border-b-4 border-green-500" />
          </div>
          <div className="flex w-full justify-center gap-4">
            <ul className="flex flex-wrap justify-center gap-2  lg:justify-start lg:gap-8">
              {MySkills[0].database.map((skill, index) => (
                <li key={index}>
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="flex w-full flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold">Front-end</h3>
            <hr className="mt-2 w-8  border-b-4 border-blue-500" />
          </div>
          <div>
            <ul className="box-border grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {MySkills[0].frontend.map((skill, index) => (
                <li
                  key={index}
                  className="h-24 text-xl font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-32 md:transition-transform md:duration-300 md:hover:translate-y-[-10px]"
                >
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold">Back-end</h3>
            <hr className="mt-2 w-8  border-b-4 border-green-500" />
          </div>
          <div>
            <ul className="box-border grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {MySkills[0].backend.map((skill, index) => (
                <li
                  key={index}
                  className="h-24 text-xl font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-32 md:transition-transform md:duration-300 md:hover:translate-y-[-10px]"
                >
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold">Base de données</h3>
            <hr className="mt-2 w-8  border-b-4 border-red-500" />
          </div>
          <div>
            <ul className="box-border grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {MySkills[0].database.map((skill, index) => (
                <li
                  key={index}
                  className="h-24 text-xl font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-32 md:transition-transform md:duration-300 md:hover:translate-y-[-10px]"
                >
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center gap-6 lg:justify-start">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold">Outils</h3>
            <hr className="mt-2 w-8  border-b-4 border-yellow-500" />
          </div>
          <div>
            <ul className="box-border grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {MySkills[0].tools.map((skill, index) => (
                <li
                  key={index}
                  className="h-24 text-xl font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-32 md:transition-transform md:duration-300 md:hover:translate-y-[-10px]"
                >
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
