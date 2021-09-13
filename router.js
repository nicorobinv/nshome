import express from "express";

export const userRouter = express.Router();

userRouter.get("/index.html", (req, res) => res.send("/index.html"));
