import React from "react";
import Project from "../Project/Project";
import MyProjects from "../../data/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex h-fit flex-col items-center gap-12 pb-16 pt-8 lg:h-fit lg:min-h-screen "
    >
      <h2 className="text-4xl font-bold">Mes projets</h2>
      <div className="grid w-[90%] flex-grow grid-cols-1 items-center  gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
        {/* Mapping projects data */}
        {MyProjects.map((data, index) => (
          <Project
            projectId={data.id}
            projectCover={data.cover}
            projectTitle={data.title}
            projectPresentation={data.presentation}
            projectDescription={data.description}
            projectSkills={data.skills}
            projectCode={data.linkCode}
            projectSite={data.linkSite}
            projectDate={data.date}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
