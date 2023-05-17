import React from 'react'
import { Link } from 'react-router-dom'
import '../about/About'

export default function Navbar() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li to={'../home/Home'} className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#home"
            id="home"
          >
            Home
          </a>
        </li>
        <li to={'../about/About'} className="nav-item">
          <a className="nav-link" href="#about" id="about">
            About
          </a>
        </li>
        <li to={'../contact/Contact'} className="nav-item">
          <a className="nav-link" href="#contact" id="contact">
            Contact
          </a>
        </li>
        <li to={'../auth/Auth'} className="nav-item">
          <a className="nav-link " id="#signup">
            SignUp/SignIn
          </a>
        </li>
      </ul>
    </>
  )
}
