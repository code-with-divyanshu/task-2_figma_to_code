import Image from "next/image";
import React from "react";
import "./CTA.css";
const CTA = ({ title, subtitle, btnText, image, width, height }) => {
  return (
    <div className="cta-container">
      <div className="containt">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <button className="cta-btn">{btnText}</button>
      </div>
      <div className="cta-image">
        <Image
          src={image}
          alt="cta-image"
          style={{ width: width, height: height, objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default CTA;
