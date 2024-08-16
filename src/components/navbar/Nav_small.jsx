import React from "react";
import "./Nav_small.css";
import logo from "../../images/Nav_logo.png";
import logo1 from "../../images/Menu_logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { IoBriefcaseOutline, IoCallOutline } from "react-icons/io5";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TbFileCv } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Nav_small() {
  return (
    <div>
      {/* Navbar Starts */}
      <nav
        className="navbar navbar-expand-lg p-0 container-fluid fixed-top d-block d-lg-none"
        role="navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="60"
              className="d-inline-block align-text-top p-0"
            />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon custom-toggler-icon"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img
              src={logo1}
              alt="Logo"
              width="100"
              height="60"
              className="d-inline-block align-text-top p-0"
              id="offcanvasNavbarLabel"
            />
            <button
              type="button"
              className="btn-close custom-close-btn"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav d-flex justify-content-center flex-grow-1">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <AiOutlineHome className="logo_1" />
                    HOME
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#About"
                >
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <IoIosContact className="logo_1" />
                    ABOUT ME
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Service">
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <IoBriefcaseOutline className="logo_1" />
                    SERVICES
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <GrProjects className="logo_1" />
                    PROJECTS
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <GrUserExpert className="logo_1" />
                    EXPERIENCES
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <IoCallOutline className="logo_1" />
                    CONTACT ME
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sourav_CV_14_8_2024.pdf" download={"Sourav_CV.pdf"}>
                  <button
                    type="button"
                    className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
                    data-bs-dismiss="offcanvas"
                  >
                    <TbFileCv className="logo_1" />
                    DOWNLOAD RESUME
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar Ends */}
    </div>
  );
}

export default Nav_small;
