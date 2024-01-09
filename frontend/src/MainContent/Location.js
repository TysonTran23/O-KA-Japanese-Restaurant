import React from "react";
import { Link } from "react-router-dom";
import okaLocation from "../images/oka-location.png";
import Footer from "../Footer/Footer";

import "./Location.css";

const Location = () => {
  return (
    <div>
      <h2>Kelowna's Finest Japanese Resturant</h2>
      <p>
        If ordering for Pick-Up/Delivery please consider using our third-party
        delivery apps or call us!
      </p>
      <hr />
      <Link to="/online-takeout">
        <button className="kelowna-button btn btn-outline-dark btn-lg">
          Order for Delivery
        </button>
      </Link>
      <div>
        <img className="oka-location-img" src={okaLocation} />
      </div>
      <Footer />
    </div>
  );
};

export default Location;
