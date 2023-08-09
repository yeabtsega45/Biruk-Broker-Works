const multer = require("multer");
const uploadController = require("express").Router();

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

uploadController.post(
  "/create",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      return res.status(200).json("Property created successfully");
    } catch (error) {
      console.error(error);
    }
  }
);

module.exports = uploadController;
