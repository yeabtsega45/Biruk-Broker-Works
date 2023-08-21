const verifyToken = require("../middlewares/verifyToken");
const Car = require("../models/Car");
const User = require("../models/User");
const carController = require("express").Router();
const multer = require("multer");

// get all
carController.get("/getall", async (req, res) => {
  try {
    const cars = await Car.find({});

    // console.log(cars);

    return res.status(200).json(cars);
  } catch (error) {
    console.error(error);
  }
});

// get individual cars
carController.get("/get/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate(
      "currentOwner",
      "-password"
    );

    if (!car) {
      throw new Error("No such car with that id");
    } else {
      return res.status(200).json(car);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// create car
carController.post(
  "/create",
  verifyToken,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // console.log(req.body);
      // console.log(req.files);
      const newCar = await Car.create({
        name: req.body.name,
        model: req.body.model,
        price: req.body.price,
        transmission: req.body.transmission,
        usage: req.body.usage,
        image: req.files["image"] ? req.files["image"][0].filename : null, // Access filename of 'image'
        image2: req.files["image2"] ? req.files["image2"][0].filename : null, // Access filename of 'image2'
        image3: req.files["image3"] ? req.files["image3"][0].filename : null, // Access filename of 'image3'
        currentOwner: req.user.id,
      });

      return res.status(201).json(newCar);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

// update car
carController.put(
  "/update/:id",
  verifyToken,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      if (car.currentOwner.toString() !== req.user.id) {
        throw new Error("You are not allowed to update other people's cars");
      }

      const updatedData = {
        name: req.body.name,
        model: req.body.model,
        price: req.body.price,
        transmission: req.body.transmission,
        usage: req.body.usage,
        currentOwner: req.user.id,
      };

      if (req.files["image"]) {
        updatedData.image = req.files["image"][0].filename;
      }

      if (req.files["image2"]) {
        updatedData.image2 = req.files["image2"][0].filename;
      }

      if (req.files["image3"]) {
        updatedData.image3 = req.files["image3"][0].filename;
      }

      const updatedCar = await Car.findByIdAndUpdate(
        req.params.id,
        { $set: updatedData },
        { new: true }
      );

      return res.status(200).json(updatedCar);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

// delete car
carController.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car.currentOwner.toString() !== req.user.id) {
      throw new Error("You are not allowed to delete other people cars");
    }

    await car.deleteOne();

    return res.status(200).json({ msg: "Successfully deleted car" });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = carController;
