const express = require("express");
const app = express();

const server = require("http").createServer(app);

let wsServer = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/word.html");
});

wsServer.on("connection", (socket) => {
  //console.log(socket);
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome");
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => socket.to(room).emit("bye"));
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", msg);
    done();
  });
});

const handleListen = () => console.log(`Listening on http://localhost:3000`);
server.listen(3000, handleListen);
