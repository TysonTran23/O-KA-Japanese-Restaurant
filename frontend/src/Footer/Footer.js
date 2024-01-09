import React from "react";
import "./Footer.css";

//Footer Component
const Footer = () => {
  return (
    <div className="footer-container">
      {" "}
      <footer className="footer">

        <b>
          <p className="oka-title">O-KA Japanese Restaurant</p>
          <p className="oka-location">
            Located In: Orchard Plaza Shopping Centre
          </p>
          <p className="oka-address">
            1876 Cooper Roadd #108, Kelowna, BC V1Y 9N6
          </p>

          <p className="oka-phone-number">(250) - 869-1564</p>
          <p className="oka-email">okajapaneserestaurant@gmail.com</p>
        </b>
      </footer>
      <ul className="oka-hours">
        <li className="hours">Monday 11 A.M. - 8 P.M.</li>
        <li className="hours">Tuesday 11 A.M. - 8 P.M.</li>
        <li className="hours">Wednesday 11 A.M. - 8 P.M.</li>
        <li className="hours">Thursday 11 A.M. - 8 P.M.</li>
        <li className="hours">Friday 11 A.M. - 8 P.M.</li>
        <li className="hours">Saturday 12 A.M. - 8 P.M.</li>
        <li className="hours">Sunday 12 A.M. - 8 P.M.</li>
      </ul>
    </div>
  );
};

export default Footer;
