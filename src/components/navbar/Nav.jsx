import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../../images/Nav_logo.png";
import { IoBriefcaseOutline, IoCallOutline } from "react-icons/io5";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TbFileCv } from "react-icons/tb";
import { CiHome } from "react-icons/ci";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  let hideTimeout = null;

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    setVisible(true);

    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }

    hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    if (scrolled) {
      setVisible(true);

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    if (scrolled) {
      hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [scrolled]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Navbar Starts */}
      <nav
        className={`navbar navbar-expand-lg p-0 container-fluid fixed-top d-none d-lg-block ${
          visible ? "visible" : "hidden"
        }`}
        role="navigation"
      >
        <div className="container-fluid child-div">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="60"
              className="d-inline-block align-text-top p-0 d-none d-lg-block"
            />
          </a>
          <div className="navbar-nav d-flex justify-content-center flex-grow-1">
            <a className="nav-link active" aria-current="page" href="/">
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <CiHome className="logo_1" />
                HOME
              </button>
            </a>
            <a className="nav-link active" aria-current="page" href="#About">
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <IoIosContact className="logo_1" />
                ABOUT ME
              </button>
            </a>
            <a className="nav-link" href="#Service">
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <IoBriefcaseOutline className="logo_1" />
                SERVICES
              </button>
            </a>
            <a className="nav-link" href="#projects">
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <GrProjects className="logo_1" />
                PROJECTS
              </button>
            </a>
            <a className="nav-link" href="#experience">
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <GrUserExpert className="logo_1" />
                EXPERIENCES
              </button>
            </a>
            <a className="nav-link" href="#contact">
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <IoCallOutline className="logo_1" />
                CONTACT ME
              </button>
            </a>
            <a
              className="nav-link"
              href="/Sourav_CV_14_8_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-dark d-flex justify-content-center align-items-center custom-btn"
              >
                <TbFileCv className="logo_1" />
                RESUME
              </button>
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar Ends */}
    </div>
  );
}

export default Nav;
