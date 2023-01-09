import React, { useState } from 'react'
import {
  FaAngrycreative,
  FaBars,
  FaBeer,
  FaCommentAlt,
  FaHome,
  FaRegChartBar,
  FaShoppingBag,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function SideBar({ children }) {
  const menuicons = [
    {
      path: '/',
      name: 'Home',
      icon: <FaHome />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaBeer />,
    },
    {
      path: '/products',
      name: 'Products',
      icon: <FaShoppingBag />,
    },
    {
      path: '/analitycs',
      name: 'Analitycs',
      icon: <FaAngrycreative />,
    },
    {
      path: '/comments',
      name: 'Comments',
      icon: <FaCommentAlt />,
    },
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
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SideBar
