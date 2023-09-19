const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/connectDb");
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
// const uploadController = require("./controllers/uploadController");
const carController = require("./controllers/carController");

const app = express();
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: ["http://localhost:3000"],
    // origin: ["https://biruk-broker-works.netlify.app"],
    origin: ["https://property-brokers.onrender.com"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/images", express.static("public/images"));

app.use("/auth", authController);
app.use("/property", propertyController);
// app.use("/upload", uploadController);
app.use("/car", carController);

app.listen(process.env.PORT, () =>
  console.log("server has been started successfully!")
);
