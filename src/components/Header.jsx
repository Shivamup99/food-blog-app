/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./component.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Featured
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Breakfast
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                fruits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-3" role="button">
              <FaLinkedinIn />
            </li>
            <li className="nav-item px-3" role="button">
              <FaGithub />
            </li>
            <li className="nav-item px-3" role="button">
              <FaInstagram />
            </li>
            <li className="nav-item px-3" role="button">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
