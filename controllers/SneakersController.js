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
    const { sort, query } = req.query;

    if (sort && query) {
      const sneakers = await SneakersModel.find({
        name: { $regex: query, $options: "i" },
      })
        .sort(sort)
        .exec();
      res.json(sneakers);
    } else if (sort) {
      const sneakers = await SneakersModel.find({}).sort(sort).exec();
      res.json(sneakers);
    } else if (query) {
      const sneakers = await SneakersModel.find({
        name: { $regex: query, $options: "i" },
      }).exec();
      res.json(sneakers);
    } else {
      const sneakers = await SneakersModel.find({}).exec();
      res.json(sneakers);
    }
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

    await SneakersModel.updateOne(
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

    await SneakersModel.findOneAndDelete(
      {
        _id: sneakersId,
      },
      res.json({
        success: true,
      })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to receive data",
    });
  }
};
