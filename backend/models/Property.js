const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    currentOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 50,
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
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
      min: 15,
    },
    location: {
      type: String,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);
