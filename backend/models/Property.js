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
    img: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
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
