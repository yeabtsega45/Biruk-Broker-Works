const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    currentOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    usage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
