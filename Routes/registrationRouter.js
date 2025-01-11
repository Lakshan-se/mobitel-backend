import express from "express";
import {getRegistrations, saveRegistration } from "../controllers/registrationController.js";


const registrationRouter = express.Router();

registrationRouter.post("/", saveRegistration);
registrationRouter.get("/", getRegistrations);  // GET all registrations


export default registrationRouter;
