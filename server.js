const express = require("express");
const mongojs = require("mongojs");
let mongoose = require("mongoose");

const app = express();

const databaseUrl = "workout";
const collections = ["workoutSeeds"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/exercise", (req, res) => {
    db.exercises.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

app.listen(3000, () => {
  console.log("App running on port 3000!");
});