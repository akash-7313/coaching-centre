import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="opacity-75" src={logo} alt="" />
        <NavLink exact to="/home">
          Home
        </NavLink>
        <NavLink exact to="/courses">
          Courses
        </NavLink>
        <NavLink exact to="/events">
          Events
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
      </div>
      <div className="search">
        <input type="text" placeholder="Search here" />
        <i className="fas fa-shopping-bag"></i>
        <i className="fas fa-user"></i>
      </div>
    </nav>
  );
};

export default Header;
