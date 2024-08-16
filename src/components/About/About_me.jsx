import React from "react";
import "./About_me.css";
import Skills from "./Skills";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function About_me() {
  return (
    <div id="About">
      <div className="container-fluid about_cont pt-5 ">
        <div className="container">
          <h1
            className="text-center pb-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            ABOUT ME
          </h1>

          <div className="row">
            <div className="col" data-aos="zoom-in" data-aos-duration="2000">
              <p>
                I’m a dedicated Frontend Web Developer with a strong command of
                HTML, CSS, and JavaScript, specializing in creating visually
                stunning and highly functional websites using Bootstrap and
                React. My passion lies in designing and developing responsive,
                user-centric websites that align seamlessly with client visions.
              </p>
              <p>
                With a keen eye for detail, I excel at transforming creative
                concepts into engaging digital experiences. I stay at the
                forefront of emerging technologies and design trends, ensuring
                that every project I work on meets the highest standards of
                quality and innovation.
              </p>
              <p>
                My approach is collaborative and strategic, working closely with
                cross-functional teams to enhance user experience and drive
                engagement. I thrive on turning ideas into successful digital
                solutions, delivering results that not only meet but exceed
                client expectations.
              </p>
            </div>
          </div>
        </div>
        <Skills></Skills>
      </div>
    </div>
  );
}

export default About_me;
