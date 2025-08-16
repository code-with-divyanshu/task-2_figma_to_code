import React from "react";
import "./Hero.css";
import Image from "next/image";
import heroSImage from "@/../public/images/hero2_image.png";
import heroFImage from "@/../public/images/hero1_image.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="main-content">
        <div className="content">
          <h1>GATHER YOUR TEAM, ENTER THE TOURNAMENTS AND WIN BIG!</h1>
          <button>START HERE</button>
        </div>
        <div className="s_image">
          <Image src={heroSImage} alt="s-heroImage" />
        </div>
      </div>
      <div className="main-image">
        <Image src={heroFImage} alt="f-heroImage" />
      </div>
    </section>
  );
};

export default Hero;
