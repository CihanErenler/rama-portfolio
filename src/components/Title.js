import React from "react";
import titleBg_1 from "../assets/title-bg.png";
import titleBg_2 from "../assets/title-bg-2.png";

const Title = ({ children, type }) => {
  return (
    <div className="relative py-10">
      <img src={type === "light" ? titleBg_2 : titleBg_1} alt="bg1" />
      <h1 className="text-[50px] absolute  top-1/2 -translate-y-1/2 font-medium">
        {children}
      </h1>
    </div>
  );
};

export default Title;
