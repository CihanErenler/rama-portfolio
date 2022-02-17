import React from "react";
import Title from "./Title";
import Project from "./Project";
import { projects } from "../constants/data";

const Projects = () => {
  return (
    <section className="mb-32" id="projects">
      <div className="container px-5 mx-auto">
        <div className="py-24">
          <Title>My latest projects</Title>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-9">
          {projects.map((p) => {
            return <Project key={p.id} {...p} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
