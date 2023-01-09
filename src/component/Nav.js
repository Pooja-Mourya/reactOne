import React from 'react'

function Nav() {
  return (
    <nav className="topNavContainer">
      <ul className="nav navUl">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
