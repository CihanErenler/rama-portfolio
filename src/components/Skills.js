import React from "react";
import { skills } from "../constants/data";
import Skill from "./Skill";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="mb-64">
      <div className="container px-5 mx-auto">
        <div className="py-32">
          <Title>My skills & experience</Title>
        </div>

        <div className="grid md:grid-cols-2  xl:grid-cols-3 gap-16">
          {skills.map((skill) => {
            return <Skill key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
