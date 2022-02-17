import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { links, skills } from "../constants/data";

const Navbar = ({ action }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const toggleShadow = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", toggleShadow);
    return () => document.removeEventListener("scroll", toggleShadow);
  });

  return (
    <div
      className={
        shadow
          ? "h-[88px] flex items-center  fixed top-0 left-0 w-full bg-white z-40 shadow transition-all duration-500"
          : "h-[88px] flex items-center  fixed top-0 left-0 w-full bg-white z-40 transition-all duration-500"
      }
    >
      <div className="container px-5 mx-auto">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-3xl font-black font-base">
            RF
          </a>
          <ul className="hidden md:flex gap-14">
            {links.map((map) => {
              return (
                <li key={map.id}>
                  <a className="nav-link" href={map.href}>
                    {map.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:flex gap-5">
            <a href="#">
              <FaLinkedinIn className="text-white bg-black w-6 h-6 p-1 rounded-full" />
            </a>
            <a href="#">
              <FaGithub className="text-black w-6 h-6" />
            </a>
            <a href="#">
              <HiOutlineMail className="text-white bg-black rounded-full p-[3px] w-6 h-6" />
            </a>
          </div>
          <div
            className="space-y-1 block md:hidden cursor-pointer"
            onClick={action}
          >
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
