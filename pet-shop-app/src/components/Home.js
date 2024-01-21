import React, { useState, useEffect } from "react";
import home from "../assets/home.jpg";
import { Link } from "react-scroll";
import { MdOutlinePets } from "react-icons/md";

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(true);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="home-div" id="home">
        <div className="home-col">
          <h1 className="welcome-heading">Welcome To The Paws n’ Purr</h1>
          <p className="welcome-text">
            Discover a world of love and companionship at Paws n’ Purr. We're
            passionate about connecting pets with loving homes. Whether you're
            looking to adopt a furry friend or seeking quality care for your
            beloved companion, we're here for you. Our mission is to create
            lasting bonds between pets and their owners, providing a haven of
            joy, warmth, and wagging tails. Join us on this journey of
            friendship, laughter, and endless paw prints!
          </p>

          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
        </div>
        <div className="home-col">
          {" "}
          <img src={home} alt="Home" className="home-image" />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {" "}
        <Link to="about" smooth={true} duration={500}>
          <MdOutlinePets
            fontSize={30}
            color={isScrolling ? "#FF5733" : "#1f1f1f"}
            style={{ cursor: "pointer", transition: "color 0.1s" }}
            className={`scroll-icon ${isScrolling ? "scrolling" : ""}`}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
