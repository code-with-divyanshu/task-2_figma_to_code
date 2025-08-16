import React from "react";
import pubgImage from "@/../public/images/pubg-image.png";
import codImage from "@/../public/images/cod.jpg";
import freeFireImage from "@/../public/images/free-fire.png";
import gtaImage from "@/../public/images/gta.jpg";
import asphaltImage from "@/../public/images/asphalt.jpg";
import cowImage from "@/../public/images/cow.jpg";
import cocImage from "@/../public/images/coc.png";
import IgiImage from "@/../public/images/Igi.jpg";
import "./GameSection.css";
import Image from "next/image";

const images = [
  {
    id: 0,
    src: pubgImage,
    alt: "pubg-image",
  },
  {
    id: 1,
    src: codImage,
    alt: "cod-image",
  },
  {
    id: 2,
    src: freeFireImage,
    alt: "freeFire-image",
  },
  {
    id: 3,
    src: gtaImage,
    alt: "gta-image",
  },
  {
    id: 4,
    src: asphaltImage,
    alt: "asphalt-image",
  },
  {
    id: 5,
    src: cowImage,
    alt: "cow-image",
  },
  {
    id: 6,
    src: cocImage,
    alt: "coc-image",
  },
  {
    id: 7,
    src: IgiImage,
    alt: "Igi-image",
  },
];

const GameSection = () => {
  return (
    <section id="games" className="games">
      <div className="games-container">
        <h2>GAMES</h2>
        <div className="games-images">
          {images.map((image) => (
            <div key={image.id}>
              <Image src={image.src} alt={image.alt} className="game" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
