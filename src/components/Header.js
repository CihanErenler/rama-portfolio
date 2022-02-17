import Navbar from "./Navbar";
import Hero from "./Hero";

import React from "react";

const Header = ({ action }) => {
  return (
    <section>
      <Navbar action={action} />
      <Hero />
    </section>
  );
};

export default Header;
