const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  require("./routes/apiRoute")(app);
  require("./routes/htmlRoute")(app);

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});