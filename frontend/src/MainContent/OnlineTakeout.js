import React from "react";
import { Link } from "react-router-dom";
import image from "../images/oka-takeout.jpeg";
import Footer from "../Footer/Footer";
import "./OnlineTakeout.css";

const OnlineTakeout = () => {
  return (
    <>
      <div className="online-takeout-container">
        <h1 className="online-takeout-header">Online Takeout Orders</h1>
        <img src={image} alt="Takeout" className="online-takeout-image" />
        <h4>Select your preferred platform to place an order:</h4>

        <a
          href="https://www.skipthedishes.com/oka-japanese-restaurant"
          className="order-link-button"
        >
          <button>Skip The Dishes</button>
        </a>
        <a
          href="https://www.doordash.com/en-CA/store/oka-japanese-restaurant-kelowna-1631859/"
          className="order-link-button"
        >
          <button>Door Dash</button>
        </a>
        <a
          href="https://www.ubereats.com/ca/store/oka-japanese-restaurant/ow65uMf_U1GckR8k4a6-TQ?utm_source=AdWords_NonBrand&utm_campaign=CM2049465-search-google-nonbrand_32_-99_CA-National_e_all_acq_cpc_en_DSA_Exact__dsa-1136820532232_665188943008_110469673827__c&campaign_id=10949109101&adg_id=110469673827&fi_id=&match=&net=g&dev=c&dev_m=&ad_id=665188943008&cre=665188943008&kwid=dsa-1136820532232&kw=&placement=&tar=&gclsrc=aw.ds&gclid=CjwKCAiAjrarBhAWEiwA2qWdCFCy4D_nTC5HNA6VZak9MvVcUfdPCCGwMFBeKL61MnO8q9Epe1tgcBoC9uoQAvD_BwE"
          className="order-link-button"
        >
          <button>Uber Eats</button>
        </a>
        <Link to="/location">
          <button className="location-button">Kelowna Location</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default OnlineTakeout;
