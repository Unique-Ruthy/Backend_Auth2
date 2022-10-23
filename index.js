const express = require("express");
const app = express();
const userRouter = require("./routes/user");

// local data from env variable
const mongoose = require("mongoose");
require("dotenv").config();

const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth", userRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("App listening on port", port));
