import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      imageUrl: String,
      isAdded: Boolean,
    },
  ],
});

export default mongoose.model("Cart", CartSchema);
