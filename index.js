import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
  registerValidation,
  loginValidation,
  sneakersCreateValidation,
} from "./validation.js";

import checkAuth from "./utils/checkAuth.js";
import * as handleValidationErrors from "./utils/handleValidationErrors.js";

import * as userController from "./controllers/UserController.js";
import * as sneakersController from "./controllers/SneakersController.js";
import * as favoritesController from "./controllers/FavoritesController.js";
import * as cartController from "./controllers/CartController.js";

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

app.use(cors({ origin: "*" }));
app.use(express.json());

//user routes
app.post("/auth/login", function (req, res) {
  loginValidation, handleValidationErrors;
  userController.login(req, res);
});
app.post("/auth/register", function (req, res) {
  registerValidation, handleValidationErrors, userController.register(req, res);
});

//sneakers routes
app.post("/sneakers/create", function (req, res) {
  checkAuth,
    sneakersCreateValidation,
    handleValidationErrors,
    sneakersController.create(req, res);
});
app.get("/sneakers", sneakersController.getAll);
app.patch("/sneakers/:id", function (req, res) {
  checkAuth,
    sneakersCreateValidation,
    handleValidationErrors,
    sneakersController.update(req, res);
});
app.delete("/sneakers/:id", function (req, res) {
  checkAuth, sneakersController.remove(req, res);
});

//favorites routes
app.post("/favorites/add", function (req, res) {
  favoritesController.create(req, res);
});
app.get("/favorites", favoritesController.getAll);
app.patch("/favorites/:id", function (req, res) {
  checkAuth, favoritesController.update(req, res);
});
app.delete("/favorites/:id", function (req, res) {
  favoritesController.remove(req, res);
});

//cart routes
app.post("/cart/add", function (req, res) {
  cartController.add(req, res);
});
app.post("/cart", checkAuth, cartController.getAll);
app.post("/cart/:id", function (req, res) {
  cartController.remove(req, res);
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("OK");
});
