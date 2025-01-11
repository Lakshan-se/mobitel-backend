import express from "express";
import { getReports, saveReport } from "../controllers/reportController.js";


const reportRouter = express.Router();

reportRouter.post("/", saveReport);
reportRouter.get("/", getReports);


export default reportRouter;
