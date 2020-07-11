import app from "./app.js";
import socketIO from "socket.io";
import socketController from "./src/socketController";

const PORT = 80;

const handleListening = () =>
  console.log(`✅Listening on: http://www.nshome.me:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", (socket) => socketController(socket));
