const homephoto = document.querySelector(".container");
const hps = homephoto.style;

const IMG_NUMBER = 63;

function handleImageLoad(event) {
  event.target.classList.remove("invisible");
  event.target.classList.add("bgImage");
}

function paintImage(imgNumber) {
  const image = new Image();
  hps.backgroundPosition = `center`;
  hps.backgroundRepeat = `no-repeat`;
  hps.backgroundImage = `url(images/home/${imgNumber + 1}.jpg)`;
  hps.backgroundSize = `cover`;
  image.classList.add("invisible");
  image.addEventListener("load", handleImageLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
