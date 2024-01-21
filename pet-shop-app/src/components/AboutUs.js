import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const AboutUs = () => {
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
      <h1
        className="welcome-heading"
        style={{ marginTop: "10%", textAlign: "center" }}
      >
        We Are The Best Care Center in Myanmar.
      </h1>
      <div className="about-div" id="about">
        <div className="about-col">
          <div style={{ marginBottom: "10%" }}>
            <div className="icon-heading">
              <h1 className="about-part">
                <MdOutlinePets size={30} className="about-icons" /> Our Vision
              </h1>
            </div>
            <p className="about-misson">
              Our vision is to create a compassionate world where every pet
              receives the love, care, and attention they deserve. We aspire for
              a future where pets and their owners live harmoniously, sharing
              moments of joy and companionship.
            </p>
          </div>
          <div style={{ marginBottom: "10%" }}>
            <div className="icon-heading">
              <h1 className="about-part">
                <MdOutlinePets size={30} className="about-icons" /> Our Mission
              </h1>
            </div>
            <p className="about-misson">
              At Paws n’ Purr, our mission is to provide exceptional care and
              support for pets, ensuring their well-being and happiness. We
              strive to connect pets with loving homes and foster a community
              that values the bond between animals and their human companions.
            </p>
          </div>
          <div className="icon-heading">
            <h1 className="about-part">
              <MdOutlinePets size={30} className="about-icons" /> Our Values
            </h1>
          </div>
          <p className="about-misson">
            Our values are centered around integrity, empathy, and
            responsibility. We believe in treating every pet with respect and
            kindness. Our team is dedicated to upholding the highest standards
            of care, fostering trust with pet owners, and creating a positive
            impact on the lives of animals.
          </p>
        </div>
        <div className="about-col">
          <img
            src="https://img.freepik.com/free-photo/grey-fluffy-domestic-cat-with-long-hair-showing-its-affection-brown-dog-with-long-hair_181624-45574.jpg?w=740&t=st=1705856446~exp=1705857046~hmac=2731830ae116e71d15a04b6d38a7bbd22161ef3ce1ac12d4bb62c364e3e87f3c"
            alt="About Us"
            className="home-image"
          />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <Link to="home" smooth={true} duration={500}>
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

export default AboutUs;
