const verifyToken = require("../middlewares/verifyToken");
const Property = require("../models/Property");
const User = require("../models/User");
const propertyController = require("express").Router();

// get all
propertyController.get("/getAll", async (req, res) => {
  try {
    const properties = await Property.find({});

    console.log(properties);

    return res.status(200).json(properties);
  } catch (error) {
    console.error(error);
  }
});
