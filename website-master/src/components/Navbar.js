import React from "react";
import { NavLink } from "react-router-dom";
import "./assets/Navbar.scss";
import logo from "./assets/img/logo_tr_bg.png"

export default function Navbar(props) {
  const handleBurger = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // burger anim
    burger.classList.toggle("toggle");
  };

  return (
    <nav>
      <div className="brand">
        <NavLink to="/" exact>
          <img src={logo} className="nav-logo"></img>
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          {" "}
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/timeline" activeClassName="active-link">
            Timeline
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/olympian" activeClassName="active-link">
            Meet Olympian
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/blog" activeClassName="active-link">
            Blog
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/sponsors" activeClassName="active-link">
            Sponsors
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact" activeClassName="active-link">
            Contact Us
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/donate" activeClassName="active-link">
            Donate
          </NavLink>
        </li>
      </ul>
      <div className="burger" onClick={handleBurger}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
