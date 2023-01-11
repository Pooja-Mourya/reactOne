import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-5 my-lg-0 navbar-nav-scroll">
              <Link className="nav-item" to={'/'}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link className="nav-item" to={'/products'}>
                <a className="nav-link" href="#">
                  Products
                </a>
              </Link>
              <Link className="nav-item" to={'/services'}>
                <a className="nav-link" href="#">
                  Services
                </a>
              </Link>
              <Link className="nav-item" to={'/about'}>
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
              <Link className="nav-item" to={'/contact'}>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </Link>
            </ul>
            <div className="btn btn-outline-success">
              <Link className="text-dark" to="/register">
                SignIn/Signup
              </Link>
            </div>
            <a className="btn btn-outline-info" style={{ marginLeft: 10 }}>
              <span>
                <FaCartPlus />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
