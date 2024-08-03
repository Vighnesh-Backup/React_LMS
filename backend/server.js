import express from "express";
import "dotenv/config";
import db from "./utils/db/db.js";
import cors from "cors";

const port = process.env.PORT;
const app = express();

// middleware
//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! db import here
db();

// ! Model Here

import route from "./utils/routes/routes.js";
app.use("/api/v1", route);

// ! API's Here

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

// API for Login form
// app.post("/createUser", async (req, res) => {
//   const { email, password } = req.body;
//   if ( email && password ) {
//     const data = new userModel({
//       email: email,
//       password: password,
//     });
//     const d = await data.save();
//     res.status(201).json({ message: "user created successfully ", result: d });
//   } else {
//     res.status(400).json({ message: "all fields are required" });
//   }
// });
