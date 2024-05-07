import CartModel from "../models/cart.js";

export const add = async (req, res) => {
  try {
    const model = CartModel({
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      isAdded: req.body.isAdded,
    });

    const cart = await model.save();

    res.json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to add to cart",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const cart = CartModel.find();
    res.json(cart);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Items not found",
    });
  }
};