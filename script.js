let playButton = document.getElementById('playButton');
let buttonReplay = document.getElementById("buttonReplay");
let buttonNext = document.getElementById("buttonNext");
let buttonBack = document.getElementById("buttonBack");

let isPlay = false;
let musicaAtual = 0;

let musicaData = [
  {
    "nome": "Memory Reboot",
    "autor": "VØJ, Narvent",
    "src": "./src/sound/MemoryReboot.mp3",
    "img": "./src/img/Memory.png"
  },
  {
    "nome": "Like a Prayer",
    "autor": "Madona",
    "src": "./src/sound/LikeaPrayer.mp3",
    "img": "./src/img/DeadWolv.jpg"
  },
  {
      "nome": "Smash Mouth",
      "autor": "All Stars",
      "src": "./src/sound/SmashMouth.mp3",
      "img": "./src/img/allStars.png"
  },
  {
      "nome": "Rick BackStore",
      "autor": "Rick Sanchez",
      "src": "./src/sound/rickBackstore.mp3",
      "img": "./src/img/rickSanchez.jpg"
  }
]

let sound = new Audio(musicaData[musicaAtual].src);

function atualizarInfoMusica() { //atualiza as informaçoes do card
  document.getElementById("tituloMusica").innerText = musicaData[musicaAtual].nome;
  document.getElementById("tituloCantor").innerText = musicaData[musicaAtual].autor;
  document.getElementById("imgMusica").src = musicaData[musicaAtual].img;
  sound.src = musicaData[musicaAtual].src;
}

atualizarInfoMusica();

function music() {
  let playFigure = document.getElementById("playFigure");

  if(isPlay) {
    sound.pause();
    playFigure.classList.remove("fa-pause");
    playFigure.classList.add("fa-play");
  } else {
    sound.play()
    playFigure.classList.remove("fa-play");
    playFigure.classList.add("fa-pause");
  }
}

sound.onplaying = function() {
  isPlay = true;
};
sound.onpause = function() {
  isPlay = false;
};

function replay() { //volta a musica para o incio
  sound.currentTime = 0;
  sound.play();
  if(sound.onpause) {
      playFigure.classList.remove("fa-play");
      playFigure.classList.add("fa-pause");
  }
}

function backMusic() { //volta para musica anterior
  musicaAtual = (musicaAtual + 1) % musicaData.length; //comando que faz voltar
  atualizarInfoMusica();
  sound.play();
  document.getElementById("playFigure").classList.remove("fa-play");
  document.getElementById("playFigure").classList.add("fa-pause");
}

function nextMusic() { //passa a musica para a proxima
  musicaAtual = (musicaAtual - 1 + musicaData.length) % musicaData.length; //comando que faz avançar
  atualizarInfoMusica();
  sound.play();
  document.getElementById("playFigure").classList.remove("fa-play");
  document.getElementById("playFigure").classList.add("fa-pause");
}

buttonPlay.addEventListener("click", music);
buttonReplay.addEventListener("click", replay);
buttonNext.addEventListener("click", nextMusic);
buttonBack.addEventListener("click", backMusic);