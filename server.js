const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });


  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });