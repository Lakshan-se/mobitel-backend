import express from "express";
import { getFoods, saveFood } from "../controllers/foodController.js";



const foodRouter = express.Router();
foodRouter.post("/",saveFood)
foodRouter.get("/",getFoods)


export default foodRouter;
