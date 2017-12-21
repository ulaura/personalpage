// Dependencies
// path allows the server to grab the correct file path for the url
var path = require("path");


// Routing
module.exports = function(app) {
  // HTML GET Requests

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};