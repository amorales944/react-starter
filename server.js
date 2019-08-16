const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


if (process.env.NODE_ENV === 'production') {

  app.use(express.static('react-starter/build'));


  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });