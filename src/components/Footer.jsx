/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Best Nutritions</a>
                </li>
                <li>
                  <a href="#">Best Health Advioser</a>
                </li>
                <li>
                  <a href="#">Best Zym Food</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Dracarys Health Blog</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaGithubSquare />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
          <p className="copyright">Shivam Dracarys © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
