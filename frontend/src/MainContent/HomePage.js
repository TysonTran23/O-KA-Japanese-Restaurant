import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CustomCarousel.css";

import "./HomePage.css";
import image1 from "../images/oka-image1.avif";
import image2 from "../images/oka-image2.jpeg";
import image3 from "../images/oka-image3.jpeg";
import image4 from "../images/oka-image4.webp";
import image5 from "../images/oka-image5.jpeg";
import image6 from "../images/oka-image6.webp";
import greenTea from "../images/green-tea-image.jpeg";
import okaRestaurant from "../images/oka-restaurant-image.webp";

const HomePage = () => {
  return (
    <>
      <div className="carousel-container">
        {/* React carousel that uses to loop through images  */}
        <Carousel
          autoPlay
          infiniteLoop
          useKeyboardArrows
          interval={6000}
          transitionTime={1000}
        >
          <div className="carousel-slide">
            <img className="carousel-images" src={image2} alt="Image 1" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image6} alt="Image 2" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image3} alt="Image 3" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image4} alt="Image 4" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image5} alt="Image 5" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image1} alt="Image 6" />
          </div>
        </Carousel>
      </div>
      <h1>WELCOME TO KELOWNA'S FINEST SUSHI</h1>
      <hr />
      <h3>JOIN US FOR LUNCH OR DINNER TODAY!</h3>

      <Link to="/location">
        <div>
          <button
            type="button"
            className="kelowna-button btn btn-outline-dark btn-lg"
          >
            KELOWNA LOCATION
          </button>
        </div>
      </Link>
      <img className="green-tea" src={greenTea} alt="Green Tea" />
      <div className="about-container">
        <h2 className="about-title">About</h2>
        <hr />
        <p className="about-us-text">
          Welcome to our family-owned gem in the heart of Orchard Plaza Shopping
          Centre, where authentic Japanese cuisine meets a fusion of Asian
          flavors. Since opening our doors in September 2003, we've been
          dedicated to offering a diverse and delectable menu that includes not
          only classic sushi and sumptuous teriyaki dishes but also an array of
          other Asian specialties like savory Pho and vibrant Vermicelli bowls.
          Celebrating over 20 years of culinary excellence, our restaurant is a
          testament to the timeless appeal of genuine Japanese food. Our
          commitment to quality and authentic flavors has made us a beloved
          destination for both locals and visitors alike. Join us for a dining
          experience that promises to delight your taste buds and transport you
          to the heart of Japan!
        </p>
        <Link to="/about-us">
          <button type="button" className="btn btn-outline-dark">
            More About Us
          </button>
        </Link>
      </div>
      <div className="visit-us-container">
        <img src={okaRestaurant}></img>
        <div className="visit-us-text">VISIT US TODAY</div>
      </div>
      <hr />

      <Footer />
    </>
  );
};

export default HomePage;
