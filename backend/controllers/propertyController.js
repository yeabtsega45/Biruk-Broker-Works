const verifyToken = require("../middlewares/verifyToken");
const Property = require("../models/Property");
const User = require("../models/User");
const propertyController = require("express").Router();
const multer = require("multer");

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

propertyController.post(
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
      const newProperty = await Property.create({
        type: req.body.type,
        location: req.body.location,
        area: req.body.area,
        rooms: req.body.rooms,
        price: req.body.price,
        image: req.files["image"] ? req.files["image"][0].filename : null, // Access filename of 'image'
        image2: req.files["image2"] ? req.files["image2"][0].filename : null, // Access filename of 'image2'
        image3: req.files["image3"] ? req.files["image3"][0].filename : null, // Access filename of 'image3'
        currentOwner: req.user.id,
      });

      return res.status(201).json(newProperty);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

// propertyController.post("/create", verifyToken, async (req, res) => {
//   // console.log("data is coming", req.body);
//   try {
//     const newProperty = await Property.create({
//       ...req.body,
//       currentOwner: req.user.id,
//     });

//     return res.status(201).json(newProperty);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });

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
