import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <div className="Container">
        <div>
          <NavLink to={"/"} className="icon">
            <FaHome className="homeİcon" />
            <h1>Home</h1>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/customer"}>Customer</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
