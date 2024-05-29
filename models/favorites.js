import mongoose from "mongoose";

const FavoritesSchema = new mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sneakers",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Favorites", FavoritesSchema);
