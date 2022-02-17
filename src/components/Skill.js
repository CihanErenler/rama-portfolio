import React from "react";

const Skill = ({ title, tags, icon }) => {
  return (
    <section className="h-[295px] bg-primary-100">
      <div className="w-24 h-24 rounded-full text-4xl flex items-center justify-center text-primary-400 bg-white -mt-12 mx-auto">
        {icon}
      </div>
      <h1 className="text-center text-2xl font-bold py-9">{title}</h1>
      <div className="text-center">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-3 py-2 mr-2 text-base leading-none bg-white rounded-full mb-2"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
