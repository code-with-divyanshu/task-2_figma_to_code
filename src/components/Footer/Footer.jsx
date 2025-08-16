import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css";
import logo from "@/../public/images/Vector.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="about">
        <Link href="/" className="logo">
          <Image src={logo} alt="logo" className="logo-design" />
          <span>VIRTUALITY</span>
        </Link>
        <p className="logo-para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="about">
        <h3>Lorem Ipsum</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="about">
        <h3>Lorem Ipsum</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="about">
        <h3>Lorem Ipsum</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
