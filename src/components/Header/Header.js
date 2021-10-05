import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="d-flex align-items-center">
        <span className="name me-3 fs-3">
          <b className="text-warning">a</b>
          <b className="text-primary">lp</b>
          <b className="text-warning">ha</b>
          <b className="text-success">be</b>
          <b className="text-warning">t</b>
        </span>
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
      <div className="search d-flex align-items-center justify-content-center">
        <input type="text" placeholder="Search here" />
        <i className="fas fa-user-circle"></i>
      </div>
    </nav>
  );
};

export default Header;
