import React from "react";
import "./Home.css";
import me from "../../images/Myself.jpeg";
import me1 from "../../images/sourav.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Home() {
  return (
    <div>
      <div className="intro container-fluid p-0 m-0">
        <div className="row">
          <div
            className="col-md-5 col-12 img-col p-0 m-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={me} alt="" className="img-1" />
          </div>
          <div
            className="col-md-7 col-12 d-flex justify-content-center align-items-center flex-column pb-0 m-0 text_col"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <h2
              className="pt-5 pt-sm-0"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Hello, World.
            </h2>
            <h1 className="" data-aos="fade-right" data-aos-duration="2000">
              I'm Sourav Patnaik.
            </h1>
            <h5
              className="pb-4 text-center"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              | &nbsp;&nbsp; FRONTEND WEB DEVELOPER &nbsp;&nbsp; |<br />& <br />
              | &nbsp;&nbsp;FREELANCER &nbsp;&nbsp; |
            </h5>
            <h6
              className="container text-center pt-4 ps-5 pe-5"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Hello! I’m a <span className="highlight_text">Frontend Web developer & Freelancer</span> with extensive experience in website
              design and development. I enjoy discussing unique projects and
              finding innovative solutions to web design challenges.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
