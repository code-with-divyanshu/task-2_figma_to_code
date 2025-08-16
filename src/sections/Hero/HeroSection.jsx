import Image from "next/image";
import React from "react";
import heroImage from "@/../public/images/hero-image.png";
import pubgImage from "@/../public/images/pubg-image.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="main-container">
        <div className="main-content">
          <h1>THE UNTIMATE COMPETITIVE GAMING PLATFROM</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div className="btn-group">
            <button className="btn-white">FIND OUT HOW IT WORKS</button>
            <button className="btn-main">REGISTER NOW !</button>
          </div>
        </div>
        <div className="hero-image">
          <Image src={heroImage} alt="hero-image" />
        </div>
      </div>

      <div className="hero-second">
        <div className="about-pubg">
          <Image
            src={pubgImage}
            alt="pubg-image"
            className="pubg-img"
            width={999}
            height={999}
          />
          <div className="containt">
            <div className="btn-group2">
              <button className="btn-white">Selected Game</button>
              <button className="btn-main">Play Game</button>
            </div>
            <h3>BATTELGROUNDS MOBILE INDIA PC</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="statics">
          <div className="entry">
            <h4>Power</h4>
            <p>
              Creating the personal avatar, and independenty exploring the world
            </p>
            <p className="year">/2021</p>
          </div>
          <div className="entry">
            <h4>Players</h4>
            <p>
              Creating the personal avatar, and independenty exploring the world
            </p>
            <p className="year">/2022</p>
          </div>
          <div className="entry">
            <h4>Showcase</h4>
            <p>
              Creating the personal avatar, and independenty exploring the world
            </p>
            <p className="year">/2023</p>
          </div>
          <div className="entry">
            <h4>Games</h4>
            <p>
              Creating the personal avatar, and independenty exploring the world
            </p>
            <p className="year">/2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
