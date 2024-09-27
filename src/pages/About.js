import React from "react";
import "../assets/css/style.css";
import Img1 from "../assets/img/about-1.png";
import Img2 from "../assets/img/about-2.png";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about-bg container about">
          <div className="left-about">
            <img className="about-img" src={Img1} alt="about" />
            <img className="about-img" src={Img2} alt="about" />
          </div>

          <div className="right-about">
            <p className="title-about">About</p>
            <p className="desc-about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="mt-40">
              <button className="btn-about">
                Read More<i class=" bi bi-arrow-right pl-10"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
