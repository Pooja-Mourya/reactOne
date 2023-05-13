import React from 'react'
import { Link } from 'react-router-dom'
import '../about/About'

export default function Navbar() {
  return (
    <>
      <ul className="nav justify-content-center">
        <Link to={'../home/Home'} className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" id="home">
            Home
          </a>
        </Link>
        <Link to={'../about/About'} className="nav-item">
          <a className="nav-link" href="#" id="about">
            About
          </a>
        </Link>
        <Link to={'../contact/Contact'} className="nav-item">
          <a className="nav-link" href="#" id="contact">
            Contact
          </a>
        </Link>
        <Link to={'../auth/Auth'} className="nav-item">
          <a className="nav-link " id="signup">
            SignUp/SignIn
          </a>
        </Link>
      </ul>
    </>
  )
}
