import React from "react";
import "./Experience.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Experience() {
  return (
    <div id="experience">
      <div className="container-fluid experience_cont pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-12 d-flex flex-column col_1 align-items-lg-start align-items-center"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h1 className="" data-aos="zoom-in" data-aos-duration="2000">
                EXPERIENCES
              </h1>
              <div className="Date_div px-2 mb-1 mt-4">
                <p className="">July 2024-Present</p>
              </div>
              <h6 className=" name-1">Ervon Technology</h6>
              <p className="">Frontend Web Developer Intern</p>
              <hr className="exp-line pt-0 mt-0" />
              <div className="Date_div px-2 mb-1 mt-4">
                <p className="">August 2023- November 2023</p>
              </div>
              <h6 className=" name-1">The Website Makers</h6>
              <p className="">Web Developer Intern</p>
              <hr className="exp-line pt-0 mt-0" />
            </div>

            <div
              className="col-lg-6 col-12 d-flex flex-column col_2 align-items-lg-end align-items-center pt-lg-0 pt-5"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1 className="" data-aos="zoom-in" data-aos-duration="2000">
                EDUCATION
              </h1>
              <div className="Date_div px-2 mb-1 mt-4">
                <p className="">July 2024-Present</p>
              </div>
              <h6 className=" name-1">WebMasters Learning</h6>
              <p className="">MERN Stack Development Course</p>
              <hr className="exp-line pt-0 mt-0" />

              <div className="Date_div px-2 mb-1 mt-4">
                <p className="">July 2023 - Jan 2024</p>
              </div>
              <h6 className=" name-1">PySpiders</h6>
              <p className="">Python FullStack Development Course</p>
              <hr className="exp-line pt-0 mt-0" />

              <div className="Date_div px-2 mb-1 mt-4">
                <p className="">August 2019 - July 2023</p>
              </div>
              <h6 className=" name-1">Ajay Binay Institute Of Technology </h6>
              <p className="">B.Tech CSE</p>
              <hr className="exp-line pt-0 mt-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
