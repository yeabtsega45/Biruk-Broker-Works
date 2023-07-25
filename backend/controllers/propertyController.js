const verifyToken = require("../middlewares/verifyToken");
const Property = require("../models/Property");
const User = require("../models/User");
const propertyController = require("express").Router();

// get all
propertyController.get("/getall", async (req, res) => {
  try {
    const properties = await Property.find({});

    console.log(properties);

    return res.status(200).json(properties);
  } catch (error) {
    console.error(error);
  }
});

// create property
propertyController.post("/create", verifyToken, async (req, res) => {
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

// update property
propertyController.put("/update/:id", verifyToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (property.currentOwner.toString() !== req.user.id) {
      throw new Error(
        "You are not allowed to update other people's properties"
      );
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    return res.status(200).json(updatedProperty);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// delete property
propertyController.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (property.currentOwner.toString() !== req.user.id) {
      throw new Error("You are not allowed to delete other people properties");
    }

    await property.deleteOne();

    return res.status(200).json({ msg: "Successfully deleted property" });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = propertyController;
