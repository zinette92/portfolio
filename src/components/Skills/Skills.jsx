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
      <div className="flex w-[80%] flex-col gap-8">
        <div className="flex w-fit flex-col gap-6">
          <div>
            <h3 class="text-2xl font-semibold">Front-end</h3>
            <hr className="mt-2 w-8  border-b-4 border-blue-500" />
          </div>
          <div className="flex w-full gap-4">
            <ul className="flex flex-wrap justify-start gap-8">
              {MySkills[0].frontend.map((skill, index) => (
                <li key={index}>
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-fit flex-col gap-6">
          <div>
            <h3 class="text-2xl font-semibold">Back-end</h3>
            <hr className="mt-2 w-8  border-b-4 border-yellow-500" />
          </div>
          <div className="flex w-full gap-6">
            <ul className="flex flex-wrap justify-start gap-8">
              {MySkills[0].backend.map((skill, index) => (
                <li key={index}>
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-fit flex-col gap-6">
          <div>
            <h3 class="text-2xl font-semibold">Base de données</h3>
            <hr className="mt-2 w-8  border-b-4 border-green-500" />
          </div>
          <div className="flex w-full gap-6">
            <ul className="flex flex-wrap justify-start gap-8">
              {MySkills[0].database.map((skill, index) => (
                <li key={index}>
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-fit flex-col gap-6">
          <div>
            <h3 class="text-2xl font-semibold">Outils</h3>
            <hr className="mt-2 w-8  border-b-4 border-red-500" />
          </div>
          <div className="flex w-full gap-6">
            <ul className="flex flex-wrap justify-start gap-8">
              {MySkills[0].tools.map((skill, index) => (
                <li key={index}>
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
