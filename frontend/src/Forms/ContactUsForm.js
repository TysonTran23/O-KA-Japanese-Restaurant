//Necessary imports
import React, { useState } from "react";
import axios from "axios";

const ContactUsForm = () => {
  //Start off the form with empty inputs
  const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  //Create a state for the form, set it to the INITIAL_STATE
  const [formData, setFormData] = useState(INITIAL_STATE);

  //Handles the change in inputs (typing)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  //Handles the submission of the forms
  const handleSubmit = async (e) => {
    //Prevents the page to refresh but allows the form to be submitted
    e.preventDefault();
    //Makes the post request to the api to send the form data to the database
    try {
      const response = await axios.post(
        "http://localhost:3001/contact/inbox",
        formData
      );
      console.log(response.data);
      //Reset the form inputs to empty after submission and alerts the user
      setFormData(INITIAL_STATE);
      alert("Your message has been sent successfully");
    } catch (e) {
      //Logs the error in the console
      console.log(e);
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
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="phone">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phone}
          />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="message">
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
          />
        </label>
      </div>
      <button type="submit" className="form-button">
        Send
      </button>
    </form>
  );
};

export default ContactUsForm;
