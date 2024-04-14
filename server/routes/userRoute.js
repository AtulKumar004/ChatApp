const express = require("express");
const router = express.Router();
const User = require("../model/userModal");
const bcrypt = require("bcrypt");
const { generateToken , protectRoute } = require("./authHelper");

router.post("/register", async (req, res) => {
  try {
    console.log("Register request ====>", req.body);
    const { firstName, lastName, email, password } = req.body;
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.status(400).json({
        message: "Email already exists",
        status: false
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user);

    delete user.password;
    return res.status(200).json({
      message: "User created successfully",
      data : user,
      token,
      status: true
    });
  } catch (error) {
    console.log("Error in register", error);
    return res.status(500).json({
      message: "Internal server error",
      status: false
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
        status: false
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
        status: false
      });
    } 

    const token = generateToken(user);
    return res.status(200).json({
      message: "User logged in",
      data : user,
      token,
      status: true
    });
  } catch (error) {
    console.log("Error in login", error);
    return res.status(500).json({
      message: "Internal server error",
      status: false
    });
  }
});
router.get('/user', protectRoute, async (req, res) => {
   try {
      // Fetch user data using the userId from the request object
      const user = await User.findById(req.userId).select('-password'); // Exclude the password from the response
      
      if (!user) {
         return res.status(404).json({ message: 'User not found' , status: false});
      }
      console.log("getUser ===>", user);
 
     return res.status(200).json({
      message: "Execution successfully",
      data : user,
      status : true,
   
    });
   } catch (error) {
     res.status(500).json({ message: 'Server error',  status: false });
   }
 });

module.exports = router;
