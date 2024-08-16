import React from "react";
import "./Footer.css";
import { CiFacebook, CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
});

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer_cont">
        <div className="container pt-5 ">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center pb-5">
              <a
                href="https://www.facebook.com/Sourav.patnaik.33/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer_logo_div mx-lg-5 mx-3">
                  <CiFacebook className="logo_main" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/sourav_patnaik_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer_logo_div mx-lg-5 mx-3">
                  <CiInstagram className="logo_main" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sourav-patnaik-b371822ba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer_logo_div mx-lg-5 mx-3">
                  <CiLinkedin className="logo_main" />
                </div>
              </a>

              <a href="mailto:patnaiksouravofficial@gmail.com">
                <div className="footer_logo_div mx-lg-5 mx-3">
                  <CiMail className="logo_main" />
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col  d-flex flex-column justify-content-center align-items-center">
              <hr className="foot-line" />
              <p className="foot_text">
                {" "}
                &#169; Copyright 2024-Portfolio by Sourav Patnaik
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
