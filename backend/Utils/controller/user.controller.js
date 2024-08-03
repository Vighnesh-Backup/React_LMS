import userModel from "../model/user.model.js";
import multer from "multer";
import path from "path";

const dir = path.join("/public");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

export const createUser = async (req, res) => {
  const { fname, lname, email, mobile, password } = req.body;

  //const file = req.file.filename;

  if (fname && lname && email && mobile && password ) {
    const checkEmail = await userModel.findOne({ email: email });
    if (checkEmail) {
      return res.status(400).json({ message: "email Already exist" });
    } else {
      const data = new userModel({
        fname: fname,
        lname: lname,
        email: email,
        mobile: mobile,
        password: password,
        
      });
      const d = await data.save();
      res
        .status(201)
        .json({ message: "user created successfully ", result: d });
    }
  } else {
    res.status(400).json({ message: "all fields are required" });
  }
};

export const checkEmail = async (req, res) => {
  const { email } = req.body;
  const checkEmail = await userModel.findOne({ email: email });
  if (checkEmail) {
    res.status(400).json({ message: "eamil ALready exist" });
  } else {
    res.status(200).json({ message: "new user" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const user = await userModel.find();
    if (user) {
      res.status(200).json({ message: user });
    } else {
      res.status(400).json({ message: "user not found" });
    }
  } catch (error) {}
};


export const loginUser = async(req, res)=>{

  const{email , password} = req.body ;

  if(email && password){
    const compare = await userModel.findOne({email:email});//checking email from 
  

  if(compare){
    if(compare.password !== password){
        res.status(401).json({message:"invalid password"})
    }else{
      const userId = userModel.findOne({password})
      const token = jwt.sign(
        {user: userId},
        Process.env.SECRETKEY,
        {expriresIn : "1h",});

    }
    
  }else{
    res.status.json({message:"invalid email"})
  }
}else{
  res.status.json({message:"All fields are requried"})
}

}