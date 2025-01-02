import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());


// Mongodb Connection

const mongoUrl = process.env.MONGO_DB_URI;
mongoose.connect(mongoUrl, {});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connected");
});

app.use("/api/users", userRouter);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });