const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

const userRoutes = require("./routes/userRoute");
// const fileUpload = require("./routes/fileUpload");
const fileUpload = multer();
const path = require("path");
// const multer = require("multer");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("image");

app.post("/api/upload", (req, res) => {
  console.log("upload file ===>", req.file);
  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({ message: err, status: false });
    } else {
      if (req.file === undefined) {
        res.status(400).json({ message: "No file selected", status: false });
      } else {
        res
          .status(200)
          .json({
            imagePath: `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`,
          });
      }
    }
  });
});

app.use("/api/auth", userRoutes);

mongoose
  .connect("mongodb://localhost:27017/chat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("=======================DB connection Successful=============");
  })
  .catch((err) => {
    console.log("Error : ",err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT} `);
});
