import userModel from "../model/model.js";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken"
import "dotenv/config"

const dir = path.join("./public");

// save pdf and imege
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    // filename come from frontend
    cb(null, file.originalname);
  },
});
export const upload = multer({ storage: storage });

export const createUser = async (req, res) => {
  // req.body come from form data(frontend)
  const {
    firstName,
    lastName,
    address,
    city,
    state,
    phoneNumber,
    pinCode,
    password,
    email,
  } = req.body;
  // for pdf & photo (req.body like)
  const file = req.file.filename;

  if (
    firstName &&
    lastName &&
    address &&
    city &&
    state &&
    phoneNumber &&
    pinCode &&
    password &&
    email &&
    file
  ) {
    const check = await userModel.findOne({ email: email });

    if (check) {
      return res.status(400).json({ message: "user Exist" });
    } else {
      const data = new userModel({
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        state: state,
        phoneNumber: phoneNumber,
        pinCode: pinCode,
        password: password,
        email: email,
        file: file,
      });
      const saveData = await data.save();
      res
        .status(201)
        .json({ message: "user created successfully", result: saveData });
    }
  } else {
    res.status(400).json({ message: "All fields are requried " });
  }
};

export const checkMail = async (req, res) => {
  const { email } = req.body;
  const check = await userModel.findOne({ email: email });

  if (check) return res.status(400).json({ message: "user Exist" });
};

export const getAllUser = async (req, res) => {
  try {
    console.log("try get user ")
    const user = await userModel.find();
    if (user) {
      res.status(200).json({ message: user });
    } else {
      res.status(400).json({ message: "data not found" });
    }
  } catch (error) {}
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const compare = await userModel.findOne({ email:email });
    if (compare) {
      if (compare.password !== password) {
        res.status(400).json({ message: "invalid password" });
      } else {
        const userId = userModel.findOne({password})
        const token  = jwt.sign({user:userId.password} , process.env.SECRETKEY , {expiresIn: "1h"})

        res.status(200).json({ message: "user loggedin" , token:token });
      }
    } else {
      res.status(400).json({ message: "email not found" });
    }
  } else {
    res.status(400).json({ message: "all fealds required" });
  }
};

export const addCard = async(req , res)=>{
  const {title , description , author} = req.body;
  const uploadCard = req.file.filename;

  card = await cardModel({
    title:title,
    description:description,
    author:author,
    cardFile:uploadCard

  })
  if (card) {
    
  }
}