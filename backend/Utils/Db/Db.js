import mongoose from "mongoose";

const ConnectionString = "mongodb://localhost:27017/CetpaProjectBypremSir";

if (!ConnectionString) throw new Error("missing connection string");

async function db() {
  const connect = await mongoose.connect(ConnectionString);

  if (connect) {
    console.log("Connected Successfully");
  } else {
    console.log("connection Failed");
  }
}

export default db;