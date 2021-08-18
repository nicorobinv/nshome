const homephoto = document.querySelector(".container");
const hps = homephoto.style;

const IMG_NUMBER = 63;

function paintImage(imgNumber) {
  hps.backgroundPosition = `center`;
  hps.backgroundRepeat = `no-repeat`;
  hps.backgroundImage = `url(images/home/${imgNumber + 1}.jpg)`;
  hps.backgroundSize = `cover`;
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

/*
const homephoto = document.querySelector("content");

const IMG_NUMBER = 63;

function paintImage(imgNumber) {
	const image = new Image();
	image.src = `/images/home/${imgNumber + 1}.jpg`;
	homephoto.appendChild(image);
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

*/
