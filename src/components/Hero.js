import React from "react";
import Button from "./Button";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="h-screen flex relative">
      <div className="hidden xl:block absolute right-0 h-screen ">
        <img
          className="w-full h-full object-cover pt-[88px]"
          src={banner}
          alt="banner"
        />
      </div>
      <div className="container px-5 mx-auto h-full flex flex-col items-start justify-center relative z-10">
        <p className="md:w-[740px] text-[50px] sm:text-[60px] md:text-[80px] font-bold mb-4 leading-tight mx-auto xl:mx-0 text-center xl:text-left">
          With me I bring the best solutions
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl mb-14 mx-auto xl:mx-0">
          <span className="font-semibold">Rachmad Fauzan</span>{" "}
          <span className="sm:inline hidden"> - </span> Dev Ops Engineer
        </p>
        <Button to="#projects">My Project</Button>
      </div>
    </section>
  );
};

export default Hero;
