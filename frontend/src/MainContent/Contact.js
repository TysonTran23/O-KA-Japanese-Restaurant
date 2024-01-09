import React from "react";
import { Link } from "react-router-dom";

import ContactUsForm from "../Forms/ContactUsForm";
import ReviewForm from "../Forms/ReviewForm";
import Footer from "../Footer/Footer";
import image1 from "../images/oka-wonton.webp";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-header">Contact</h1>
        <img src={image1} className="contact-image" />
        <h2>Our Locations</h2>
        <hr></hr>
        <Link to="/location">
          <button className="location-button">Kelowna Location</button>
        </Link>
        <p>
          We value your feedback and we are committed to delivering. The best
          dining experience possible. If your experience at Bamboo Chopsticks
          was dissatisfactory, or if there is anything you feel we need to
          improve on, please complete this form below so our management team can
          make future dining experiences a better one. Our management team and
          executive teams also monitor review sites, so if you have had a great
          experience, we encourage you to please help us share it on Google,
          Facebook, Yelp or TripAdvisor so other diners can hear about it too.
        </p>
        <div className="forms-container">
          <div className="forms-section">
            <h2>Talk With Us</h2>
            <hr></hr>
            <ContactUsForm />
          </div>
          <div className="forms-section">
            <h2>Leave a Review!</h2>
            <hr></hr>
            <ReviewForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
