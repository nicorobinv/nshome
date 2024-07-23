const { join } = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();
const PORT = 5872;

const server = require("http").createServer(app);

let wsServer = require("socket.io")(server);

app.use(helmet());

app.use(logger("dev"));
app.use(express.static(join(__dirname, "/static")));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// 디버그 로그 추가
app.use((req, res, next) => {
  console.log(`Received request for ${req.url}`);
  next();
});

function publicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anon";
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome", socket.nickname);
    wsServer.sockets.emit("room_change", publicRooms()); // to all rooms
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) =>
      socket.to(room).emit("bye", socket.nickname)
    );
  });
  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", publicRooms());
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

const handleListen = () =>
  console.log(`✅Listening on: http://www.nshome.me:${PORT}`);
server.listen(PORT, '0.0.0.0', handleListen);
