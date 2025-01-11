import express from "express";
import { getShifts, saveShift } from "../controllers/shiftController.js";


const shiftRouter = express.Router();

shiftRouter.post("/", saveShift);
shiftRouter.get("/", getShifts);


export default shiftRouter;
