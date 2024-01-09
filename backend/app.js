//Importing necessary modules
const express = require("express");
const cors = require("cors");

//Creating a instance of express
const app = express();

//Applying CORS middleware to allow cross-origin requests
app.use(cors());
//Enabling Express to parse JSON bodies in requests
app.use(express.json());

//Import the routes to set a default route
const menuRoutes = require("./routes/menuItems");
const contactRoutes = require("./routes/Contact");

//Setting up route handlers
app.use(`/menu`, menuRoutes);
app.use("/contact", contactRoutes);

//Export the app for potential use in other files
module.exports = app;
