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

// create property
propertyController.post("/", verifyToken, async (req, res) => {
  try {
    const newProperty = await Property.create({
      ...req.body,
      currentOwner: req.user.id,
    });

    return res.status(201).json(newProperty);
  } catch (error) {
    return res.status(500).json(error);
  }
});
