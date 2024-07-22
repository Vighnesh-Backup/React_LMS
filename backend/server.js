import express from "express";
import 'dotenv/config';
import db from "./Utils/Db/Db.js";
import mongoose from "mongoose";
const app = express();
// port red from .env
const port = process.env.PORT;

// db import her 

db();

// ! Model Here

const schema = new mongoose.Schema({
    name: String,
    email: String,
  });
  
app.listen(port, ()=>{
    console.log(`${port} par server chal raha h `);
})

//API here

app.post("/createUser", async (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
      const data = new userModel({
        name: name,
        email: email,
      });
      const d = await data.save();
      res.status(201).json({ message: "user created successfully ", result: d });
    } else {
      res.status(400).json({ message: "all fields are required" });
    }
  });

