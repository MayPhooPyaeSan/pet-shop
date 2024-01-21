import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-div" id="contact">
      <div className="col">
        <div>
          <h4 style={{ fontSize: "1.2rem" }}> Paws n’ Purr</h4>
          <p style={{ marginTop: "10%", fontSize: "1.2rem" }}>
            The best pet cat in Myanmar
          </p>
        </div>
      </div>
      <div className="col">
        <p style={{ fontSize: "1.2rem" }}>Home</p>
        <p style={{ marginTop: "5%", fontSize: "1.2rem" }}>About Us</p>
        <p style={{ marginTop: "5%", fontSize: "1.2rem" }}>Services</p>
        <p style={{ marginTop: "5%", fontSize: "1.2rem" }}>Contact</p>
      </div>
      <div className="col">
        <h4 style={{ fontSize: "1.2rem" }}>Address</h4>
        <p style={{ marginTop: "5%" }}>
          31 street , Chan Aye Thar San, Mandalay
        </p>
        <h4 style={{ marginTop: "5%", marginBottom: "5%", fontSize: "1.2rem" }}>
          Follow us on social
        </h4>
        <div>
          <a
            link=""
            href="https://www.facebook.com/profile.php?id=100009878950363"
          >
            <FaFacebook
              fontSize={30}
              style={{ marginLeft: "20px" }}
              color="white"
            />
          </a>
          <a link="" href="https://www.instagram.com/alwaysoct3/">
            <FaInstagram
              fontSize={30}
              style={{ marginLeft: "20px" }}
              color="white"
            />
          </a>
          <a
            link=""
            href="https://www.linkedin.com/in/may-phoo-pyae-san-90510b269/"
          >
            <FaLinkedin
              fontSize={30}
              style={{ marginLeft: "20px" }}
              color="white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
