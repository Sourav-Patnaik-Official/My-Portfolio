import React from "react";
import "./About_me.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Skills() {
  return (
    <div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>HTML</h6>
                    <h6 className="text-end">99%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>CSS</h6>
                    <h6 className="text-end">80%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>JS</h6>
                    <h6 className="text-end">80%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>Bootstrap</h6>
                    <h6 className="text-end">80%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-lg-4 pt-0 ">
          <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>Tailwind CSS</h6>
                    <h6 className="text-end">80%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>REACT.js</h6>
                    <h6 className="text-end">60%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar2"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>Python</h6>
                    <h6 className="text-end">50%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar3"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-12 pb-lg-0 pb-3">
                <div
                  class="skill-container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div class="skill-label d-flex justify-content-between">
                    <h6>SQL</h6>
                    <h6 className="text-end">50%</h6>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
