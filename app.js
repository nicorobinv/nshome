/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { join } from "path";
//import socketIO from "socket.io";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import { userRouter } from "./router";
//import { server } from "./init.js";
import express from "express";

const app = express();
const http = require("http");
const fs = require("fs");

//const express = require("express");
//app.use(express.static(__dirname + "/"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(logger("dev"));
app.use(express.static(join(__dirname, "/")));
//app.get("/", (req, res) => res.render("home"));

/*
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
*/

/*
const io = socketIO.listen(server);

io.on("connection", () => console.log("somebody connected"));
*/
export default app;
