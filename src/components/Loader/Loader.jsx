// Loader.js
import React from "react";
import "./Loader.css";
import load_logo from "../../images/Nav_logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

const Loader = () => {
  return (
    <div>
      <div className="container-fluid load_cont">
        <div className="row">
          <div
            className="col d-flex justify-content-center align-items-center load_col"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1 className="px-2">Hello !</h1> <h1 className="px-2">नमस्ते !</h1>
            <h1 className="px-2"> ନମସ୍କାର !</h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>WELCOME TO</h1>
            <img src={load_logo} alt="" className="img_load" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="loader"
              data-aos="zoom-in"
              data-aos-duration="2000"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
