import mongoose from "mongoose";

const SneakersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    isAdded: {
      type: Boolean,
      default: false,
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sneakers", SneakersSchema);
