import mongoose from "mongoose";


const connString = "mongodb+srv://asdfggjkl736:<password>@cluster0.cmmj1ot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

if(!connString) throw new Error("Missing connection string ");

async function db(){
    const connect = await mongoose.connect(connString);
     
    if(connect){
        console.log(" conection sucess");
    }
    else{
        console.log(" conection failed")
    }
};

export default db;