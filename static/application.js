const socket = io.connect("http://www.nshome.me/");

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

// eslint-disable-next-line no-unused-vars
function test() {
  console.log(socket.emit("SendData", { data: "test" }));
}

function handleRoomSubmit(event) {
  console.log(event);
  event.preventDefault();

  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
  socket.emit("text");
}

form.addEventListener("submit", handleRoomSubmit);
