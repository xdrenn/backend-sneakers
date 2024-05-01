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

export const getAll = async (req, res) => {
  try {
    const sneakers = await SneakersModel.find();
    res.json(sneakers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to receive data",
    });
  }
};

export const update = async (req, res) => {
  try {
    const sneakersId = req.params.id;

    await PostModel.updateOne(
      {
        _id: sneakersId,
      },
      {
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to update sneakers",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const sneakersId = req.params.id;

    SneakersModel.findOneAndDelete(
      {
        id: sneakersId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to delete sneakers" });
        }

        if (!doc) {
          res.status(404).json({
            message: "Sneakers not found",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to receive data",
    });
  }
};
