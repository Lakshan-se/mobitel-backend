import express from "express";
const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsers);
userRouter.post("/login", userLogin);
export default userRouter;
