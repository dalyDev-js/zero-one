import React from "react";
import "./footer.scss";
import { images } from "../../constants";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div className="areaf">
          <ul className="circlesf">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="containerF">
          <div className="itemss">
            <div className="logof">
              <img src={images.logo} alt="logo" />
            </div>
            <div className="links">
              <h1>Quick Links</h1>
              <ul>
                <li>
                  <a href="#Courses">Courses</a>
                </li>
                <li>
                  <a href="#Gallery">Gallery</a>
                </li>
                <li>
                  <a href="#Our Team">Our team</a>
                </li>
                <li>
                  <a href="#About"> About us</a>
                </li>
                <li>
                  <a href="#Join Us">Join us</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Follow us</h1>
              <div>
                <ul className="iconss">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={images.facebook} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdulrhman-al-daly/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={images.linkedin} alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com "
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={images.instagram} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={images.twitter} alt="twitter" />
                    </a>
                  </li>
                </ul>
                <div className="copyyright">
                  <p>{`© ${year} ZeroOne. All rights reserved, developed by Abdulrhman Al-Daly`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
