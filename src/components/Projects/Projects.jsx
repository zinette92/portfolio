import React from "react";
import Project from "../Project/Project";
import MyProjects from "../../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="flex h-screen flex-col items-center py-8">
      <h1 className="text-4xl font-bold">Mes Projets</h1>
      <div className="flex h-full w-full items-center justify-center gap-24">
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
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
