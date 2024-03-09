import React from "react";
import Project from "../Project/Project";
import MyProjects from "../../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="flex h-screen flex-col items-center py-8">
      <h2 className="text-4xl font-bold">Mes projets</h2>
      <div className="flex h-full w-full max-w-[80%] items-center justify-center gap-24">
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
            projectImages={data.images}
            projectDate={data.date}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
