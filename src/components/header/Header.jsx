import React, { useEffect } from "react";
import reactLogo from "../../images/logo.svg";
import myLogo from "../../images/kenchi_logo.png";
import nodeLogo from "../../images/nodejs-icon.svg";
import jSLogo from "../../images/logo-javascript.svg";
import sassLogo from "../../images/sass-logo.svg";
import htmlLogo from "../../images/html5-logo.svg";
import nextLogo from "../../images/next-js.svg";
import myCV from "../../assets/Simeon_Kenneth_Resume_.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  });
  return (
    <div className={"header-banner"}>
      <header className={"header-section"}>
        {" "}
        <img src={myLogo} className={"header-logo"} alt="Ken's logo" />{" "}
        <nav className={"nav-bar"}>
          <a href={"#about-me"} data-aos="fade-right" className={"nav-link"}>
            About
          </a>{" "}
          <a href={"#my-works"} data-aos="fade-right" className={"nav-link"}>
            Works
          </a>
          <a href={"#contact-me"} data-aos="fade-right" className={"nav-link"}>
            Contact
          </a>
        </nav>
      </header>
      <div className={"banner-content-wrapper"}>
        <section className={"banner-content"} data-aos="fade-left">
          <h1 id={"title"} data-aos="fade-left">
            {" "}
            For the <b className={"love"}>Love</b> of <br /> Frontend{" "}
          </h1>
          <p className={"about-me"} id={"about-me"}>
            I am a creative software developer with 3 years of creating
            beautiful and well structured web solutions that scale using React
            and other frontend technologies. I am flexible and can pick up new
            technologies quickly to create solutions and also broaden my
            knowledge.
          </p>
          <a
            href={myCV}
            className={"download-btn"}
            download="Simeon_kenneth_resume">
            Download CV
          </a>
        </section>
        <div className={"user-img-wrapper"} data-aos="fade-in">
          {/* <img src={logo} className={"user-img"} /> */}
        </div>
      </div>

      <section className={"stack-section"}>
        <h2 className={"stack-section-title"}>I work with these:</h2>
        <div className={"stack-wrapper"}>
          <img src={jSLogo} alt="JS Logo" />
          <img src={htmlLogo} alt="HTML logo" />
          <img src={reactLogo} id={"react-logo"} alt="React logo" />
          <img src={nodeLogo} alt="NODEjs Logo" />
          <img src={sassLogo} alt="SASS Logo" />
          <img src={nextLogo} alt="NEXTjs Logo" />
        </div>
      </section>
    </div>
  );
};

export default Header;
