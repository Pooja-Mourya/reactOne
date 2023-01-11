import React, { useState } from 'react'
import {
  FaAngrycreative,
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaBeer,
  FaCommentAlt,
  FaFontAwesomeLogoFull,
  FaHome,
  FaRegChartBar,
  FaShoppingBag,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function SideBar({ children }) {
  const menuicons = [
    {
      path: '/home',
      name: 'Home',
      icon: <FaHome />,
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   icon: <FaBeer />,
    // },
    {
      path: '/products',
      name: 'Products',
      icon: <FaShoppingBag />,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaAngrycreative />,
    },
    // {
    //   path: '/comments',
    //   name: 'Comments',
    //   icon: <FaCommentAlt />,
    // },
  ]

  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="sideContainer">
      <div className="sidebar" style={{ width: isOpen ? '200px' : '70px' }}>
        <div className="topSide">
          <h1 className="logo" style={{ display: isOpen ? 'block' : 'none' }}>
            Logo
          </h1>
          <div>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="handleLogout">
          <div>
            {menuicons.map((item, index) => (
              <NavLink className="navItem" to={item.path} key={index}>
                <div
                  style={{
                    fontSize: isOpen ? '16px' : '18px',
                    paddingTop: 10,
                    paddingLeft: 5,
                    alignItems: isOpen ? 'left' : 'center',
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    display: isOpen ? 'block' : 'none',
                    padding: 10,
                  }}
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="btn btn-outline-primary" style={{}}>
            <a>
              <span style={{ display: isOpen ? 'inline' : 'none' }}>
                Logout
              </span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  )
}

export default SideBar
