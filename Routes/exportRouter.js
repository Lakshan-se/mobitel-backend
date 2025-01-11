import express from "express";
import { getExports, saveExport } from "../controllers/exportController.js";

const exportRouter = express.Router();

exportRouter.post("/", saveExport);
exportRouter.get("/", getExports);


export default exportRouter;