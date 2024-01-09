/** Database setup */

//Client class used from pg for PostgreSQL interaction
const { Client } = require("pg");

let DB_URI;

//Checks to see what is the environment variable to determine what database to run

//Run test database if the environmental variable is set to test
if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///oka_db_test";
}
//Run real database if the environmental variable is not set to test
else {
  DB_URI = "postgresql:///oka_db";
}

//New Client instance connecting to the PostgreSQL database
let db = new Client({
  connectionString: DB_URI,
});

//Connecting to the database
db.connect();

//Exporting the database client for use elsewhere in the application
module.exports = db;
