const { join } = require("path");

const logger = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = 80;

const server = require("http").createServer(app);

let wsServer = require("socket.io")(server);

app.use(express.static(join(__dirname, "/static")));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

wsServer.on("connection", (socket) => {
  //console.log(socket);
  socket.on('message', (msg, name) => {
    wsServer.emit('receiveMessage', msg, name);
  });
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
  });

});

app.use(helmet());

app.use(logger("dev"));

const handleListen = () =>
  console.log(`✅Listening on: http://www.nshome.me:${PORT}`);
server.listen(PORT, handleListen);
