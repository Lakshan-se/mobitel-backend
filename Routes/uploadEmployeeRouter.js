import express from "express";
import   { getEmployees, saveEmployee }  from "../controllers/uploadEmployeeController.js";


const uploadEmployeeRouter = express.Router();

uploadEmployeeRouter.post("/", saveEmployee); // Save Employee
uploadEmployeeRouter.get("/", getEmployees); // GET all employees


export default uploadEmployeeRouter;
