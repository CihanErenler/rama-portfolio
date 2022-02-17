import React from "react";
import Title from "./Title";
import Rama from "../assets/rama.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary-100 lg:h-[440px] mt-64 relative pb-20 lg:pb-0"
    >
      <div className="container px-5 mx-auto">
        <Title type="light">About me</Title>
        <div className="flex lg:block flex-col-reverse">
          <div>
            <p className="lg:mr-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos id
              natus qui commodi adipisci asperiores rem, voluptatum fugiat ab
              suscipit. Voluptas ipsam minus veritatis cum suscipit! Quidem iure
              nam possimus eos doloremque! Inventore suscipit nobis sequi
              necessitatibus reprehenderit modi porro doloribus hic, explicabo
              veniam ipsum sunt quibusdam voluptates aspernatur. Nam.
            </p>
          </div>
          <div className="lg:absolute bottom-0 right-0 w-[250px] h-[270px] lg:w-auto lg:h-auto mx-auto mb-16 lg:mb-0 border-8 lg:border-0 border-primary-400 overflow-hidden">
            <img src={Rama} alt="Rama" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
