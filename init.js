/* eslint-disable prettier/prettier */
import app from "./app.js";
import socketIO from "socket.io";

const PORT = 80;

const handleListening = () =>
  console.log(`✅Listening on: http://www.nshome.me:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
