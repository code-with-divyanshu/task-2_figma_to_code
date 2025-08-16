import React from "react";
import pubgImage from "@/../public/images/pubg-image.png";
import "./LatestTournamante.css";
import Image from "next/image";

const LatestTournamante = () => {
  return (
    <section id="latest-tournament" className="latest-tournament">
      <h2>LATEST TOURNAMENT</h2>
      <div className="main-container">
        <div className="about-pubg">
          <Image src={pubgImage} alt="pubg-image" className="pubg-img" />
          <div className="containt">
            <h3>BATTELGROUNDS MOBILE INDIA PC</h3>
            <p>Classic / Erangel Map</p>
            <p>Start Date - 7/08/24</p>
            <p>Timing - 10:00 PM</p>
            <button className="btn-main">Registered</button>
          </div>
        </div>

        <div className="about-pubg">
          <Image src={pubgImage} alt="pubg-image" className="pubg-img" />
          <div className="containt">
            <h3>BATTELGROUNDS MOBILE INDIA PC</h3>
            <p>Classic / Erangel Map</p>
            <p>Start Date - 7/08/24</p>
            <p>Timing - 10:00 PM</p>
            <button className="btn-main">Registered</button>
          </div>
        </div>

        <div className="about-pubg">
          <Image src={pubgImage} alt="pubg-image" className="pubg-img" />
          <div className="containt">
            <h3>BATTELGROUNDS MOBILE INDIA PC</h3>
            <p>Classic / Erangel Map</p>
            <p>Start Date - 7/08/24</p>
            <p>Timing - 10:00 PM</p>
            <button className="btn-main">Registered</button>
          </div>
        </div>

        {/* <div className="about-pubg">
          <Image src={pubgImage} alt="pubg-image" className="pubg-img" />
          <div className="containt">
            <h3>BATTELGROUNDS MOBILE INDIA PC</h3>
            <p>Classic / Erangel Map</p>
            <p>Start Date - 7/08/24</p>
            <p>Timing - 10:00 PM</p>
            <button className="btn-main">Registered</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LatestTournamante;
