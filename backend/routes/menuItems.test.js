"use strict";

const request = require("supertest");
const app = require("../app");
const db = require("../db");

//Before each test, reset the databsse to a known state
beforeEach(async () => {
  await db.query("DELETE FROM menu_items");
  await db.query(
    "INSERT INTO menu_items (name, description, price) VALUES ('Edamame', 'Steamed Soybeans', 7.0), ('Ohitashi', 'Spinach With Sweet Sauce', 7.0), ('Agedashi', 'Deep Fried Tofu', 8.5)"
  );
});

//After all tests, close the database connection
afterAll(async () => {
  await db.end();
});

//GET request for menu items
describe("GET /menu/menu-items", function () {
  test("Gets a list of menu_items", async function () {
    const response = await request(app).get("/menu/menu-items");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        name: "Edamame",
        description: "Steamed Soybeans",
        price: "7.00",
      },
      {
        id: expect.any(Number),
        name: "Ohitashi",
        description: "Spinach With Sweet Sauce",
        price: "7.00",
      },
      {
        id: expect.any(Number),
        name: "Agedashi",
        description: "Deep Fried Tofu",
        price: "8.50",
      },
    ]);
  });
});
