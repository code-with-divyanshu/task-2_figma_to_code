import Image from "next/image";
import React from "react";
import "./TopTeams.css";

const TopTeams = ({ title, subtitle, image, color }) => {
  return (
    <div className="top-team-container">
      <Image src={image} alt="title" />
      <div className="content">
        <h5 style={{ color: color }}>{title}</h5>
        <h6>{subtitle}</h6>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};

export default TopTeams;
