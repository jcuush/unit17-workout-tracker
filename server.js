const express = require("express");
let mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world");
});


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
    app.use("*", (req, res) => {
        res.send("Hello World");
    })

  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});