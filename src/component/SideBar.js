import React, { useState } from "react";
import {
  FaAngrycreative,
  FaBars,
  FaBeer,
  FaCommentAlt,
  FaHome,
  FaRegChartBar,
  FaShoppingBag
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div style={{ blackgrounColor: "red", width: isOpen ? '350' : '50' }}>
        <div>
          <h1>Logo</h1>
          <div>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuicons.map((item, index) => (
          <NavLink  to={item.path} key={index}>
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default SideBar;
