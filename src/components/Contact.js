import React from "react";
import Title from "./Title";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import arrow from "../assets/arrow.svg";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary-400 pt-16">
      <div className="container px-5 mx-auto block xl:hidden">
        <Title>Let's get in touch</Title>
      </div>
      <div className="container px-5 mx-auto xl:grid grid-cols-2 grid-flow-col-dense">
        <div className="py-32 block xl:hidden">
          <Form />
        </div>
        <div>
          <div className="hidden xl:block">
            <Title>Let's get in touch</Title>
          </div>
          <div className="block md:flex items-center justify-between xl:block xl:pb-0 pb-32">
            <div className="mb-20 md:mb-0">
              <h1 className="text-2xl font-bold mb-6">You can contact me at</h1>
              <div className="flex gap-3 mb-5">
                <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                  <HiOutlineMail className="text-primary-400" />
                </div>
                <span>johndoe@gmail.com</span>
              </div>
              <div className="flex gap-3">
                <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                  <BsFillTelephoneFill className="text-primary-400 text-xs" />
                </div>
                <span>+358 55 555 555</span>
              </div>
            </div>

            <div className="xl:pt-16">
              <h1 className="text-2xl font-bold mb-6">
                Social media & platforms
              </h1>
              <div className="flex gap-3 mb-5">
                <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
                  <FaLinkedinIn className="text-primary-400" />
                </div>
                <span>
                  <a
                    href="https://www.linkedin.com/in/cihanerenler/"
                    target="_black"
                  >
                    Linkedin
                  </a>
                </span>
              </div>
              <div className="flex gap-3">
                <div>
                  <FaGithub className="text-black text-[24px]" />
                </div>
                <span>
                  <a href="https://github.com/CihanErenler" target="_black">
                    GitHub
                  </a>
                </span>
              </div>
            </div>
          </div>
          <h1 className="hidden xl:block mt-32">
            <span className="flex gap-9 text-2xl font-bold">
              Or simply use this contact form <img src={arrow} alt="arrow" />
            </span>
          </h1>
        </div>
        <div className="py-32 hidden xl:block">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
