const http = require("http");
const express = require("express");
import morgan from "morgan";
const app = express();
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const fs = require("fs");

app.use(express.static(__dirname + "/"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(morgan("dev"));
app.use(express.static("nodejs"));

/*
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
*/
export default app;
