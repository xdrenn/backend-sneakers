import CartModel from "../models/cart.js";

export const add = async (req, res) => {
  try {
    const model = CartModel({
      items: [
        {
          name: req.body.name,
          price: req.body.price,
          imageUrl: req.body.imageUrl,
          isAdded: req.body.isAdded,
          isFavorite: req.body.isFavorite,
          id: req.body._id,
          favoriteId: req.body.favoriteId,
        },
      ],
      totalPrice: req.body.totalPrice,
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

export const remove = async (req, res) => {
  try {
    const itemId = req.params.id;

    await CartModel.findOneAndDelete(
      {
        _id: itemId,
      },
      res.json({
        success: true,
      })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to delete item",
    });
  }
};
