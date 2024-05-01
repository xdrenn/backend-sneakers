import FavoritesModel from "../models/favorites.js";

export const create = async (req, res) => {
  try {
    const doc = FavoritesModel({
      parentId: req.body.parentId,
    });

    const favorites = await doc.save();

    res.json(favorites);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to add favorites",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const favorites = await FavoritesModel.find();
    res.json(favorites);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to receive data",
    });
  }
};

export const update = async (req, res) => {
  try {
    const favoritesId = req.params.id;

    await FavoritesModel.updateOne(
      {
        _id: favoritesId,
      },
      {
        parentId: req.body.parentId,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to update favorites",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const favoritesId = req.params.id;

    await FavoritesModel.findOneAndDelete(
      {
        _id: favoritesId,
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
