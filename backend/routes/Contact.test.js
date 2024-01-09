"use strict";

const request = require("supertest");
const app = require("../app");
const db = require("../db");

//Before each test, reset the databsse to a known state
beforeEach(async () => {
  await db.query("DELETE FROM reviews");
  await db.query("DELETE FROM inbox");
  await db.query(
    "INSERT INTO reviews (name, review, rating) VALUES ('John Doe', 'Great sushi!', 5)"
  );
  await db.query(
    "INSERT INTO inbox (name, email, phone_number, message) VALUES ('Tyson Tran', 'tysontran@email.com', '1234567890', 'website looks great!')"
  );
});

//After all tests, close the database connection
afterAll(async () => {
  await db.end();
});

//GET request for reviews
describe("GET /contact/reviews", function () {
  test("Gets a list of reviews", async function () {
    const response = await request(app).get("/contact/reviews");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        name: "John Doe",
        review: "Great sushi!",
        rating: 5,
      },
    ]);
  });
});

//POST request for reviews
describe("POST /contact/reviews", function () {
  test("Successfully submits a review", async function () {
    const response = await request(app)
      .post("/contact/reviews")
      .send({ name: "Travis Scott", review: "Delicious food!", rating: 5 });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      name: "Travis Scott",
      review: "Delicious food!",
      rating: 5,
    });
  });
});

//GET request for inbox messages
describe("GET /contact/inbox", function () {
  test("Gets all inbox messages", async function () {
    const response = await request(app).get("/contact/inbox");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        name: "Tyson Tran",
        email: "tysontran@email.com",
        phone_number: "1234567890",
        message: "website looks great!",
      },
    ]);
  });
});

//POST request for inbox messages
describe("POST /contact/inbox", function () {
  test("Successfully submits inbox message", async function () {
    const response = await request(app).post("/contact/inbox").send({
      name: "Travis Scott",
      email: "travisscott@email.com",
      phone_number: "0987654321",
      message: "your restaurant could be lighter",
    });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      name: "Travis Scott",
      email: "travisscott@email.com",
      phone_number: "0987654321",
      message: "your restaurant could be lighter",
    });
  });
});
