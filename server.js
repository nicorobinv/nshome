import http from "http";
import SocketIO from "socket.io";
import express from "express";
var io = require("socket.io")(httpServer);

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/word.html");
});

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
  });
});

const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);
