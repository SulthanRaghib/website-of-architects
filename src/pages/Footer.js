import React from "react";
import LogoFooter from "../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-bg">
        <div className="container">
          <div className="footer">
            <div className="flex-1">
              <img className="logo" src={LogoFooter} alt="logo" />
            </div>

            <div className="flex-2">
              <p className="title-footer">Information</p>
              <p className="desc-footer">Main</p>
              <p className="desc-footer">Gallery</p>
              <p className="desc-footer">Projects</p>
              <p className="desc-footer">Certifications</p>
              <p className="desc-footer">Contacts</p>
            </div>

            <div className="flex-3">
              <p className="title-footer">Contact</p>
              <div className="flex-contact">
                <i class="bi bi-geo-alt"></i>
                <p className="desc-footer">
                  1234 Sample Street Austin Texas 78704
                </p>
              </div>
              <div className="flex-contact">
                <i class="bi bi-telephone"></i>
                <p className="desc-footer">512.333.2222</p>
              </div>
              <div className="flex-contact">
                <i class="bi bi-envelope"></i>
                <p className="desc-footer">sampleemail@gmail.com</p>
              </div>
            </div>

            <div className="flex-4">
              <p className="title-footer">Social Media</p>
              <div className="flex-social">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-pinterest"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; 2021 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
