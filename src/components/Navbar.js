import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
        </button>

        <div
          className="collapse navbar-collapse f-1"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                how work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
