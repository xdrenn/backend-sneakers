import SneakersModel from "../models/sneakers.js";

export const create = async (req, res) => {
  try {
    const doc = SneakersModel({
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
    });

    const sneakers = await doc.save();

    res.json(sneakers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create sneakers",
    });
  }
};
