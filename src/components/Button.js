import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Button = ({ children, type, to }) => {
  if (type === "github") {
    return (
      <a className="btn-git" href={to}>
        GitHub
        <FaGithub className="ml-2 text-xl" />
      </a>
    );
  }

  if (type === "prev") {
    return (
      <a className="btn-prev" href={to}>
        Preview
        <BiLinkExternal className="ml-2 text-xl" />
      </a>
    );
  }

  return (
    <a className="btn" href={to}>
      {children}
    </a>
  );
};

export default Button;
