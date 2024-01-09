import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "../MainContent/AboutUs";
import Contact from "../MainContent/Contact";
import HomePage from "../MainContent/HomePage";
import Location from "../MainContent/Location";
import Menu from "../MainContent/Menu/Menu";
import OnlineTakeout from "../MainContent/OnlineTakeout";

//The AppRoutes component works independently, this is responsible for defining what component should be displayed based on the current URL
//It uses "Routes" and "Route" from 'react-router-dom' to defined mapping between URL paths and React components
//Whenever the URL changes, for example, when a "NavLink" is clicked in the NavBar, it will render a component based on the URL
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/online-takeout" element={<OnlineTakeout />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
