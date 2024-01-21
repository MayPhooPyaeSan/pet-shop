import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdOutlinePets } from "react-icons/md";

const Service = () => {
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
    <div className="service-div" id="services">
      <div className="service-col-1">
        <h1 className="welcome-heading">Our Services</h1>
        <p className="welcome-text">
          Uncover an array of premium pet care services tailored to meet the
          unique needs of your furry friends, ensuring their happiness and
          overall well-being. From specialized health programs to personalized
          attention, our commitment goes beyond routine care. Your pets deserve
          the best, and we're here to provide them with an enriching experience
          where every moment is filled with joy and care.
        </p>
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
      </div>
      <div className="service-col" id="service-col">
        <div
          className="service-item hover-effect"
          style={{
            padding: "10px 20px",
            background: "white",
            borderRadius: "10px",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            src="https://i.pinimg.com/564x/8a/7f/f6/8a7ff6ed36373a6ec4a491e93d101b7a.jpg"
            alt="Pet Sitting"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <p className="service-text">Pet Sitting</p>
        </div>
        <div
          className="service-item hover-effect"
          style={{
            padding: "10px 20px",
            background: "white",
            borderRadius: "10px",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            src="https://i.pinimg.com/564x/b1/e8/a9/b1e8a9d68701b9a692c5a8a051a9bbf9.jpg"
            alt="Dog Walking"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <p className="service-text">Pet Dentistry</p>
        </div>
        <div
          className="service-item hover-effect"
          style={{
            padding: "10px 20px",
            background: "white",
            borderRadius: "10px",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            src="https://i.pinimg.com/564x/2b/e2/05/2be205c818d11dbe4431f8276e983b82.jpg"
            alt="Pet Dentistry"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <p className="service-text">Dog Walking</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
