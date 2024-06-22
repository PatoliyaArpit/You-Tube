import dotenv from 'dotenv';
import connectDB from './db/index.js';
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';

dotenv.config({ path: './env' });

console.log('MONGODB_URI:', process.env.MONGODB_URI);

// Connect to the database
connectDB();

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