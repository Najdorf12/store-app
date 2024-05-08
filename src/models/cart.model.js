import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId:{
        type: mongoose.Schema.Types.ObjectId,
      },
      quantity: {
        type: Number,
      },
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
