import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Nav() {
  return (
    <nav className="topNavContainer">
      <ul className="nav navUl">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Alert
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Visitor
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="userImage">p</span>
            User Name
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Setting
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Assign User
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout <FaArrowRight />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
