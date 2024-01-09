import React from "react";
import { NavLink } from "react-router-dom";
import okaLogo from "../images/oka-logo.png";
import "./NavBar.css";

//The NavBar Component is a navigation menu
//Using "NavLink" to create links to different parts of the application
//Clicking on a "NavLink" updates the URL in the browser but doesn't cause a full page reload, it tells React Router that the location has changed
//This gets changed based on user interaction, and "AppRoutes" LISTENS to these URL changes to render the correct component
const NavBar = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-links">
          {" "}
          <NavLink
            className="nav-link"
            to="/"
            exact
            activeClassName="active-link"
          >
            HOME
          </NavLink>
          <NavLink
            className="nav-link"
            to="/menu"
            exact
            activeClassName="active-link"
          >
            MENU
          </NavLink>
          <NavLink
            className="nav-link"
            to="/location"
            exact
            activeClassName="active-link"
          >
            LOCATION
          </NavLink>
        </div>

        <img className="logo" src={okaLogo} alt="Oka Logo" />

        <div className="nav-links">
          <NavLink
            className="nav-link"
            to="/contact"
            exact
            activeClassName="active-link"
          >
            CONTACT
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about-us"
            exact
            activeClassName="active-link"
          >
            ABOUT US
          </NavLink>
          <NavLink
            className="nav-link"
            to="/online-takeout"
            exact
            activeClassName="active-link"
          >
            ONLINE TAKEOUT
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
