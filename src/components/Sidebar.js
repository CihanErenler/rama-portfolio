import React from "react";
import { links } from "../constants/data";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, action }) => {
  return (
    <section
      className={
        isOpen
          ? `fixed top-0 right-0 z-50 bg-gray-100 w-[300px] h-screen text-center text-xl font-semibold transition-all duration-300 `
          : `fixed top-0 -right-[300px] z-50 bg-gray-100 w-[300px] h-screen text-center text-xl font-semibold transition-all duration-300 `
      }
    >
      <FaTimes
        className="text-2xl left-5 cursor-pointer text-red-500 absolute top-5"
        onClick={action}
      />
      <nav className="relative">
        <ul className="mt-10">
          {links.map((map) => {
            return (
              <li className="py-4" key={map.id}>
                <a className="nav-link" href={map.href} onClick={action}>
                  {map.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
