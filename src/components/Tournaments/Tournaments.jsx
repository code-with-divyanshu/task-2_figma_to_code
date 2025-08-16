import Image from "next/image";
import React from "react";
import "./Tournaments.css";

const Tournaments = ({ title, liveMsg, image, color, btnText }) => {
  return (
    <div className="container">
      <h5>
        {title} {liveMsg}
      </h5>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="img-btn">
        <Image src={image} alt="title" />
        <button style={{ background: color }}>{btnText}</button>
      </div>
    </div>
  );
};

export default Tournaments;
