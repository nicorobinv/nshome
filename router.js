import express from "express";

export const userRouter = express.Router();

userRouter.get("/index.html", (req, res) => res.send("/index.html"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/passwod", (req, res) => res.send("user password"));
