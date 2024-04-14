const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT;

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
    storage: storage
}).single('image');


router.post("/upload" , (req, res) =>{
    upload(req, res , (err) =>{
        if(err){
            res.status(500).json({ message: err , status: false});
        }else{
            if(req.file === undefined){
                res.status(400).json({ message: 'No file selected'  , status: false});
            }else{
                res.status(200).json({ imagePath: `http://localhost:${PORT}/uploads/${req.file.filename}` });
            }
        }
    })
})
