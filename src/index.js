import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';

dotenv.config({ path: './env' });


// Connect to the database
connectDB()
.then(()=>{
   app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running ai pott ${process.env.PORT}`);
   })
})
.catch((error)=>{
    console.log(" mongodg connection fail",error)
})




// import express from "express";
// const app=express();


// (async ()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("error",error)
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`app is listening ${process.env.PORT}`)
//       })

//     }catch(error){
//         console.error("Error:",error);
//     }
// })()