import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      imageUrl: String,
      isAdded: Boolean,
      isFavorite: Boolean,
      favoriteId: Number,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Cart", CartSchema);
