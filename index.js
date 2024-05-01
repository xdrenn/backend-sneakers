import express from "express";
import mongoose from "mongoose";
import { registerValidation, loginValidation } from "./validation.js";

import * as handleValidationErrors from "./utils/handleValidationErrors.js";

import * as userController from "./controllers/UserController.js";

mongoose
  .connect(
    "mongodb+srv://drenn:XfcmB7djSJosOJdd@cluster.dz2biko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => {
    console.log("DB Error", err);
  });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" hello world");
});

app.post("/auth/login", function (req, res) {
  loginValidation, handleValidationErrors;
  userController.login(req, res);
});
app.post("/auth/register", function (req, res) {
  registerValidation, handleValidationErrors, userController.register(req, res);
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("OK");
});
