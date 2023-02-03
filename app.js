const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let dateTime = new Date();
  let dateAfter = addDays(new Date(dateTime), 100);
  response.send(
    `${dateAfter.getDate()}/${
      dateAfter.getMonth() + 1
    }/${dateAfter.getFullYear()}`
  );
});

module.exports = app;
