import React, { useEffect } from "react";
import HeroIMG from "../assets/img/hero.png";
import "../assets/css/style.css";

const Hero = () => {
  return (
    <div>
      <div className="hero container">
        <div className="left-hero">
          <p className="title-hero">Project</p>
          <p className="title-hero-bold">Nurtown</p>
          <div className="icon">
            <div className="previous">
              <i class="bi bi-arrow-left"></i>
            </div>
            <div className="next">
              <i class=" bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="right-hero">
          <img className="hero-img" src={HeroIMG} alt="hero" />
          <div className="mt-40">
            <button className="btn-hero">
              View Project <i class=" bi bi-arrow-right pl-10"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
