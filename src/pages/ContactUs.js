import React from "react";
import ImgContact from "../assets/img/contact.png";

const ContactUs = () => {
  return (
    <div>
      <div className="container mt-100">
        <p className="title-contact">Contact Us</p>
        <div className="contact">
          <div className="left-contact">
            <div className="input-contact">
              <p className="text-input">Name</p>
            </div>
            <div className="input-contact">
              <p className="text-input">
                Phone Number <span className="text-red">*</span>
              </p>
            </div>
            <div className="input-contact">
              <p className="text-input">
                Email <span className="text-red">*</span>
              </p>
            </div>
            <div className="input-contact">
              <p className="text-input">Interested In</p>
            </div>
            <div className="input-message">
              <p className="text-input">
                Message <span className="text-red">*</span>
              </p>
            </div>
          </div>
          <div className="right-contact">
            <img className="contact-img" src={ImgContact} alt="contact" />
          </div>
        </div>
        <button className="btn-contact">
          Send Email <i class=" bi bi-arrow-right pl-10"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
