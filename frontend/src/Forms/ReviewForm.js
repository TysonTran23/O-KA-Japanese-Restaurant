//Necessary imports
import React, { useState } from "react";
import axios from "axios";
import "../MainContent/Contact.css";

const ReviewForm = () => {
  //Set the form to empty inputs
  const INITIAL_STATE = {
    name: "",
    review: "",
    rating: "",
  };
  //Create a state for the form and set it to the INITIAL_STATE
  const [formData, setFormData] = useState(INITIAL_STATE);

  //Handle any changes to the form inputs (typing)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  //Handle the submission of the form
  const handleSubmit = async (e) => {
    //Allows the submission of form without refreshing the page
    e.preventDefault();
    //Post request to api to submit the form to database
    try {
      const response = await axios.post(
        "http://localhost:3001/contact/reviews",
        formData
      );
      console.log(response.data);
      //Reset the form inputs to empty and alert the user their submission was successful
      setFormData(INITIAL_STATE);
      alert("Your review has been submitted successfully");
    } catch (e) {
      console.log(e);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-field">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="review">
          <input
            type="text"
            id="review"
            name="review"
            placeholder="Review"
            onChange={handleChange}
            value={formData.review}
          />
        </label>
      </div>
      <div className="form-field rating-container">
        <label htmlFor="rating">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="rating-label">
              {num}
              <input
                type="radio"
                name="rating"
                value={num}
                checked={formData.rating === `${num}`}
                onChange={handleChange}
              />
            </label>
          ))}
        </label>
      </div>
      <button type="submit" className="form-button">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
