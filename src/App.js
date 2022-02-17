import React, { useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="font-base">
      <Sidebar isOpen={sidebarOpen} action={toggle} />
      <Header action={toggle} />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
