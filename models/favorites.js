import mongoose from "mongoose";

const FavoritesSchema = new mongoose.Schema(
  {
    parentId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Favorites", FavoritesSchema);
