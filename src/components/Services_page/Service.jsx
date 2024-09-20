import React from "react";
import "./Service.css";
import { FaRegLightbulb } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { MdAnimation } from "react-icons/md";


import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Service() {
  return (
    <div id="Service">
      <div className="container-fluid service_cont pb-5">
        <h1
          className="text-center pb-5 pt-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          MY SERVICES
        </h1>

        <div className="row">
          <div
            className="col-lg-4 col-12 d-flex justify-content-center align-items-center pb-lg-0 pb-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="service_card rounded d-flex flex-column justify-content-center align-items-center ">
              <FaRegLightbulb className="service_logo pb-1" />
              <h3 className="text-center pb-1">Custom Website Development</h3>
              <p className="text-center">
                Build responsive, visually appealing websites with interactive,
                user-friendly interfaces.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-12 d-flex justify-content-center align-items-center pb-lg-0 pb-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="service_card rounded d-flex flex-column justify-content-center align-items-center ">
              <CiMobile2 className="service_logo pb-1" />
              <h3 className="text-center pb-1">Responsive Design</h3>
              <p className="text-center">
                Modernize websites for full responsiveness, improving layout and
                usability.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-12  d-flex justify-content-center align-items-center pb-lg-0 pb-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="service_card rounded d-flex flex-column justify-content-center align-items-center">
              <MdAnimation className="service_logo pb-1" />
              <h3 className="text-center pb-1">Interactive Animations</h3>
              <p className="text-center">
                Create engaging animations using libraries like AOS to enhance
                visual appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
