import React from "react";
import Button from "./Button";

const Project = (props) => {
  const { title, desc, image, git, preview, bg } = props;
  return (
    <section
      className={
        bg === "light"
          ? "bg-white border border-primary-300 sm:h-[293px] mb-10 p-4 sm:p-0"
          : "bg-primary-100 sm:h-[293px] mb-10 p-4 sm:p-0"
      }
    >
      <div className="sm:grid sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className=" w-full h-[250px] sm:h-[300px] sm:w-[170px] sm:-mt-8 shadow-xl mx-auto">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="project"
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:p-10 px-10 py-5">
          <h1 className="text-2xl font-bold pb-5">{title}</h1>
          <p>{desc}</p>
          <div className="flex gap-5 mt-5">
            <Button type="github" to={git} />
            {preview && <Button type="prev" to={preview} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
