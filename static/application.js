const socket = io.connect("http://www.nshome.me/");
//const socket = io.connect("http://localhost:80/");

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
const nickenameDiv = document.getElementById("nicknameDiv");
const roomList = document.getElementById("roomList");
const messagediv = document.getElementById("messagediv");

room.hidden = true;
messagediv.hidden = true;

let roomName;

function addMessage(message) {
  let chatLog = document.getElementById("chatLog");
  let chatTag = document.createElement("li");
  chatTag.innerText = message;
  chatLog.classList.add("me");
  chatLog.appendChild(chatTag);
}

function handleMessageSubmit(event) {
  event.preventDefault();

  const input = room.querySelector("#msg input");
  const value = input.value;
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  msgForm.addEventListener("submit", handleMessageSubmit);
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  socket.emit("nickname", input.value);
  nickenameDiv.hidden = true;
  messagediv.hidden = false;
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
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user) => {
  addMessage(`${user} joined!`);
});

socket.on("bye", (left) => {
  addMessage(`${left} left`);
});

socket.on("new_message", addMessage);

socket.on("room_change", (rooms) => {
  roomList.innterHTML = "";
  if (rooms.length === 0) {
    return;
  }
  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
