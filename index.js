import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/userRouter.js";
import shiftRouter from "./Routes/shiftRouter.js";
import cors from "cors";
import foodRouter from "./Routes/foodRouter.js";
import uploadEmployeeRouter from "./Routes/uploadEmployeeRouter.js";
import exportRouter from "./Routes/exportRouter.js";
import reportRouter from "./Routes/reportRouter.js";
import registrationRouter from "./Routes/registrationRouter.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());


// Mongodb Connection

const mongoUrl = process.env.MONGO_DB_URI;
mongoose.connect(mongoUrl, {});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connected");
});

app.use("/api/users", userRouter);
app.use("/api/shifts", shiftRouter);
app.use("/api/foods", foodRouter);
app.use("/api/exportReports", exportRouter);
app.use("/api/employees", uploadEmployeeRouter);
app.use("/api/reports", reportRouter);
app.use("/api/resetForms", registrationRouter); 

app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });