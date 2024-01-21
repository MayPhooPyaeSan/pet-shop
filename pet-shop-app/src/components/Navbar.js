import React, { useState, useEffect } from "react";
import { BiMoon } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", isDarkMode ? "disabled" : "enabled");
  };

  return (
    <header className={`header ${isMenuActive ? "cloud-active" : ""}`}>
      <nav
        className={`navbar ${isMenuActive ? "active" : ""} ${
          isScrolled && !isMenuActive ? "scrolled" : ""
        }`}
      >
        <Link to="home" smooth={true} duration={500} className="nav-logo">
          Paws n’ Purr
        </Link>
        <ul className={isMenuActive ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="icon" onClick={handleToggleDarkMode}>
          {isDarkMode ? (
            <AiOutlineCloud fontSize={35} className="cloudIcon" />
          ) : (
            <BiMoon fontSize={35} />
          )}
        </div>
        <div
          className={isMenuActive ? "hamburger active" : "hamburger"}
          onClick={handleToggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
