import React from "react";
import "./Project.css";
import Gaming from "../../images/Gaming_website.png";
import Ecommerce from "../../images/E_commerce.png";
import Infobook from "../../images/infobook.png";
import Portfolio from "../../images/MyPortfolio.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Project() {
  return (
    <div id="projects">
      <div className="container-fluid project_cont pt-5 pb-5">
        <h1
          className="text-center pb-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          PROJECTS
        </h1>
        <div className="row">
          <div className="col-lg-3 col-12 pb-5 pb-lg-0  d-flex justify-content-center align-items-center"   data-aos="fade-right"
            data-aos-duration="2000">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Gaming} className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5>Gaming Website</h5>
                <p className="card-text text-dark h6">
                  Made a Gaming Website using HTML 5 and CSS 2.1 based on a
                  action game Call Of Duty . Gave Animation property , used
                  Bootstrap buttons and carasouls , also used iframes to add
                  videos .
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 pb-5 pb-lg-0  d-flex justify-content-center align-items-center"   data-aos="fade-left"
            data-aos-duration="2000">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Ecommerce} className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5>E-Commercial Website</h5>
                <p className="card-text text-dark h6">
                  Made a commercial website template using HTML 5 and CSS 2.1.
                  In this template we can add functionality to Sign up or Sign
                  in , Select Categories of Products , Add to Cart , Location.
                  Also used Bootstrap Carasouls and etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 pb-5 pb-lg-0  d-flex justify-content-center align-items-center"   data-aos="fade-right"
            data-aos-duration="2000">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Infobook} className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5>Info Book</h5>
                <p className="card-text text-dark h6">
                  Made a small infobook about seven wonders of world using HTML
                  5 and CSS 2.1. Gave animation property , used buttons tables
                  etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 pb-lg-0  d-flex justify-content-center align-items-center"   data-aos="fade-left"
            data-aos-duration="2000">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Portfolio} className="card-img-top" alt="Description" />
              <div className="card-body">
                <h5>Personal Portfolio</h5>
                <p className="card-text text-dark h6">
                  Created a personal portfolio using React, Bootstrap, and CSS,
                  integrating AOS for smooth scroll-triggered animations. The
                  portfolio is fully responsive, adapting seamlessly across
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
