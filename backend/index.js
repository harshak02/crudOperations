import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connect from "./config/dbconnect";
import dotenv from "dotenv";
import router from "./routes/route";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// app.use("/api",(req,res,next)=>{
//     res.status(200).send("Hello World!");
// })

app.use("/api",router);

app.listen(8080,()=>{
    connect();
    console.log("Server is connected on port 8080")
})