import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CustomCarousel.css";
import "./AboutUs.css";

//Images used for this page
import image1 from "../images/oka-aboutus-4.jpeg";
import image2 from "../images/oka-restaurant.jpeg";
import image3 from "../images/oka-aboutus2.jpeg";
import image4 from "../images/oka-aboutus1.jpeg";
import image5 from "../images/oka-aboutus5.jpeg";
import image6 from "../images/oka-aboutus3.webp";

const AboutUs = () => {
  //State used to store reviews from the backend
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    //Function that calls a get request from our backend to retrieve all reviews from our database
    const displayReviews = async () => {
      try {
        let response = await axios.get("http://localhost:3001/contact/reviews");
        setReviews(response.data);
      } catch (e) {
        console.logg(e);
      }
    };

    //Calls the function above
    displayReviews();
  }, []);

  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <h2>About O-KA Japanese Restaurant</h2>
          <hr />
          <p>
            Welcome to our family-owned gem in the heart of Orchard Plaza
            Shopping Centre, where authentic Japanese cuisine meets a fusion of
            Asian flavors. Since opening our doors in September 2003, we've been
            dedicated to offering a diverse and delectable menu that includes
            not only classic sushi and sumptuous teriyaki dishes but also an
            array of other Asian specialties like savory Pho and vibrant
            Vermicelli bowls. Celebrating over 20 years of culinary excellence,
            our restaurant is a testament to the timeless appeal of genuine
            Japanese food. Our commitment to quality and authentic flavors has
            made us a beloved destination for both locals and visitors alike.
            Join us for a dining experience that promises to delight your taste
            buds and transport you to the heart of Japan!
          </p>
        </div>
        <div className="about-image">
          <img src={image1} />
        </div>
      </div>
      <div>
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
            <img className="carousel-images" src={image3} alt="Image 1" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image4} alt="Image 1" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image5} alt="Image 1" />
          </div>
          <div className="carousel-slide">
            <img className="carousel-images" src={image6} alt="Image 1" />
          </div>
        </Carousel>
      </div>
      <h2>The Story Behind The Name</h2>
      <p className="about">
        Welcome to our family-owned gem, nestled in the heart of Orchard Plaza
        Shopping Centre. Founded in 2003 by my parents, our restaurant has
        become a beloved haven where authentic Japanese cuisine meets a fusion
        of vibrant Asian flavors. While our roots are Vietnamese, our passion
        for culinary diversity shines through our eclectic menu. Our specialty,
        the "Arigato Roll", is a house favorite among our loyal sushi
        enthusiasts. Over the years, our menu has blossomed to include a variety
        of Vietnamese dishes, paying homage to our heritage with authentic Pho
        and Vermicelli bowls. The ambiance of our restaurant is both quiet and
        cozy, offering a tranquil retreat for locals and a welcoming haven for
        tourists, especially in the bustling summer months. We pride ourselves
        on being a close-knit team where family values are at the heart of our
        service. Our small but dedicated staff operates like a well-oiled
        machine, with each department seamlessly supporting one another in a
        harmonious dance of hospitality. Our loyal customers, many of whom we
        know by name, are the soul of our restaurant. Their repeated visits are
        a testament to our commitment to quality and flavor. The possibility of
        expanding our family legacy with a new location is on the horizon, but
        for now, our focus remains on delivering exceptional dining experiences
        that promise to delight the taste buds and transport our guests to the
        heart of Japan, all while infusing the warm, rich flavors of Vietnam. As
        we celebrate over two decades of culinary excellence, our restaurant
        stands as a testament not only to the timeless appeal of genuine
        Japanese food but also to the rich tapestry of Asian cuisine. We invite
        you to join us for a meal that promises not just a dining experience,
        but a journey through a world of exquisite flavors and heartfelt
        hospitality.
      </p>
      <h2>Reviews</h2>
      <div>
        {/* React Carousel that uses to loop through reviews and displays them, this will show as long as there is more than 1 review in the database */}
        {reviews.length > 0 ? (
          <Carousel
            autoPlay
            infiniteLoop
            useKeyboardArrows
            interval={6000}
            transitionTime={2000}
            showThumbs={false}
            className="reviews-carousel"
          >
            {/* Map through the array of reviews and display them accordingly */}
            {reviews.map((review) => (
              <div key={review.id} className="carousel-slide">
                <h3>{review.name}</h3>
                <p>{review.review}</p>
                <p>Rating: {review.rating}</p>
              </div>
            ))}
          </Carousel>
        ) : (
          <p>No Reviews Available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
