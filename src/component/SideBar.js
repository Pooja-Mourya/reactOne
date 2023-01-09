import React, { useState } from "react";
import {
  FaAngrycreative,
  FaBars,
  FaBeer,
  FaCommentAlt,
  FaHome,
  FaShoppingBag
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Nav from "../dashboard/Nav";

function SideBar({ children }) {
  const menuicons = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaBeer />
    },
    {
      path: "/products",
      name: "Products",
      icon: <FaShoppingBag />
    },
    {
      path: "/analitycs",
      name: "Analitycs",
      icon: <FaAngrycreative />
    },
    {
      path: "/comments",
      name: "Comments",
      icon: <FaCommentAlt />
    }
  ];
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    // alert('preesed')
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{fex:1 , flexDirection:'row'}}>
        <Nav />
        <div
          style={{
            backgroundColor: "red",
            width: isOpen ? "20%" : "5%",
            height: "100%"
          }}
        >
          <div>
            <h1>Logo</h1>
            <div>
              <FaBars style={{}} onClick={toggle} />
            </div>
          </div>
          {menuicons.map((item, index) => (
            <NavLink
              style={{ textDecoration: "none" }}
              to={item.path}
              key={index}
            >
              <div>{item.icon}</div>
              <div
                style={{
                  display: isOpen ? "block" : "none",
                  color: "black"
                }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default SideBar;
