const express = require("express");
const router = express.Router();
const db = require("../db");

//GET request to retrieve all menu-items from the database
router.get("/menu-items", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM menu_items`);
    res.json(results.rows);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
});


module.exports = router;
