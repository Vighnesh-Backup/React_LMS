import mongoose from 'mongoose'
const schema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    mobile: String,
    password: String,
    
  });
  
 const userModel = mongoose.model("user", schema);

 export default userModel;