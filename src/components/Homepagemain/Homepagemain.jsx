import React from "react";
import Home from "../Homepage/Home";
import About_me from "../About/About_me";
import Service from "../Services_page/Service";
import Project from "../Projects/Project";
import Experience from "../Experience/Experience";
import Contact_me from "../Contact_me/Contact_me";

function Homepagemain() {
  return (
    <div>
      <Home />
      <About_me/>
      <Service />
      <Project />
      <Experience />
      <Contact_me />
    </div>
  );
}

export default Homepagemain;
