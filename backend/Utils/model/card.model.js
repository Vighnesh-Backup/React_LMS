import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    title:String,
    description:String,
    author:String,
    cardImagePath:String,

})

const cardModel = mongoose.Model("card",cardSchema)
export default cardModel ;