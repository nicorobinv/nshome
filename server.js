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
  });
});

const handleListen = () => console.log(`Listening on http://localhost:3000`);
server.listen(3000, handleListen);
