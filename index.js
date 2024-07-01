const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute = require("./routes/post");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

//routes
app.use("/posts", postRoute);

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log("server listening on port", port))
  )
  .catch((error) => console.log(error.message));
