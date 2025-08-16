"use client";

import Link from "next/link";
import React from "react";
import "./Navbar.css";
import logo from "@/../public/images/Vector.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 0, link: "/", title: "Home" },
  { id: 1, link: "/how_it_works", title: "How it works" },
  { id: 2, link: "/tournaments", title: "Tournaments" },
  { id: 3, link: "/blogs", title: "Blogs" },
  { id: 4, link: "/forums", title: "Forums" },
  { id: 5, link: "/shop", title: "Shop" },
  { id: 6, link: "/contact", title: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  const closeMobileMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) menuToggle.checked = false;
  };

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image
          src={logo}
          alt="logo"
          width={30}
          height={30}
          className="logo-design"
        />
        <span>VIRTUALITY</span>
      </Link>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <div className="links">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className={`nav-link ${pathname === link.link ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
