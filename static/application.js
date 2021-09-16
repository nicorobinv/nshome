const socket = io.connect("http://www.nshome.me/");
//const socket = io.connect("http://localhost:80/");


const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;



function addMessage(msg) {
  let chatLog = document.getElementById('chatLog')
  let chatTag = document.createElement('li')
  chatTag.innerText = msg;
  chatLog.appendChild(chatTag);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("input");
  socket.emit("message", input.value, 'YOU');
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const form = room.querySelector("form");
  form.addEventListener("submit", handleMessageSubmit);
}

// eslint-disable-next-line no-unused-vars
function test() {
  console.log(socket.emit("SendData", { data: "test" }));
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
  socket.emit("text");
}

form.addEventListener("submit", handleRoomSubmit);

socket.on('receiveMessage', (msg, name) => {
  addMessage(name + ' : ' + msg)
})

socket.on("welcome", () => {
  addMessage("someone joined!");
});

socket.on("bye", () => {
  addMessage("someone left!");
});
