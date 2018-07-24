// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Express Configuration
const app = express();

// Setting the port. Will either take in what port its provided when it's deployed,
// or it will default to localhost:3000
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// The routes. I'm serving static pages for now.
require("./routes/htmlRoutes")(app);

// Starting the server with the listener
app.listen(PORT, function() {
  console.log(`Welcome to Port ${PORT}!`);
});
