import React from "react";
import "./Contact_me.css";
import me from "../../images/Myself.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { VscSend } from "react-icons/vsc";

AOS.init({
  once: false,
});

function Contact_me() {
  return (
    <div id="contact">
      <div className="container-fluid contact_cont pt-5 pb-5">
        <h1 className="text-center" data-aos="zoom-in" data-aos-duration="2000">
          CONTACT ME
        </h1>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-12 order-2 order-lg-1"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <form
                className="form_div"
                action="https://formspree.io/f/mldrlpgg"
                method="post"
              >
                <div className="form-group py-3">
                  <label htmlFor="fullName" hidden>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control Form_part input-transparent"
                    id="fullName"
                    placeholder="FULL NAME"
                    name="Full-Name"
                    required
                  />
                </div>
                <div className="form-group py-3">
                  <label htmlFor="email" hidden>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control Form_part input-transparent"
                    id="email"
                    placeholder="E-MAIL ADDRESS"
                    name="E-mail"
                    required
                  />
                </div>
                <div className="form-group py-3">
                  <label htmlFor="phone" hidden>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control Form_part input-transparent"
                    id="phone"
                    placeholder="PHONE NUMBER"
                    name="Phone-Number"

                    required
                  />
                </div>
                <div className="form-group py-3">
                  <label htmlFor="message" hidden>
                    Message
                  </label>
                  <textarea
                    className="form-control Form_part input-transparent"
                    id="message"
                    placeholder="YOUR MESSAGE"
                    rows="4"
                    name="Message"
                    required
                  />
                </div>
                <div className="form-group"></div>
                <button type="submit" className="btn form-btn">
                  Submit
                  <VscSend className="submit_logo ps-2" />
                </button>
              </form>
            </div>
            <div
              className="col-lg-6 col-12 py-3 d-flex justify-content-center ps-lg-5 ps-0 order-1 order-lg-2"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="rounded info_div pt-3 pb-3 ps-lg-4 ps-0 d-flex flex-column align-items-center align-items-lg-start ">
                <p className="h2 start_text">Sourav Patnaik</p>
                <h6 className="pt-0 mt-0 text_1">Frontend Web Developer</h6>

                <p className="pt-3 text_1">
                  <span className="start_text">AGE: </span>23
                </p>

                <p className="text_1">
                  <span className="start_text">FREELANCE: </span>Available
                </p>
                <p className="text_1">
                  <span className="start_text">PHONE: </span>+91 797 842 3084
                </p>
                <p className="text_1">
                  <span className="start_text">E-MAIL: </span>
                  patnaiksouravofficial@gmail.com
                </p>
                <p className="h1 signature">Sourav</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_me;
