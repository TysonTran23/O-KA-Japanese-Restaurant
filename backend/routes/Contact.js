
//Necessary module imports
const express = require("express");
const router = express.Router();
const db = require("../db");

//GET request to retrieve all reviews from the database
router.get("/reviews", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM reviews`);
    res.json(results.rows);
  } catch (e) {
    console.log(e);
  }
});

//POST request for a customer to submit a review
router.post("/reviews", async (req, res) => {
  const { name, review, rating } = req.body;
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (name, review, rating) VALUES ($1, $2, $3) RETURNING *",
      [name, review, rating]
    );
    res.status(201).json(newReview.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

//GET request to retrieve all inbox messages from the database
router.get("/inbox", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM inbox`);
    res.json(results.rows);
  } catch (e) {
    console.log(e);
  }
});

//POST request for a customer to submit to contact us with feedback/comments
router.post("/inbox", async (req, res) => {
  const { name, email, phone_number, message } = req.body;
  try {
    const newMessage = await db.query(
      "INSERT INTO inbox (name, email, phone_number, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone_number, message]
    );
    res.status(201).json(newMessage.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
