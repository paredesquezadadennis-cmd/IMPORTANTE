"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    resizeNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  } else if (noCount === 13) noButton.style.display = "none";
});

function handleYesClick() {
  titleElement.innerHTML = "Siiiiii!!!! 😍😍😍 luchare cada dia por reuperar tu confianza, te quiero";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  window.navigator.vibrate(2000);
  catImg.addEventListener(
    "dblclick",
    () => (titleElement.innerHTML = "Hecho con amor por tu tontito")
  );
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function resizeNoButton() {
  const computedStyle = window.getComputedStyle(noButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));

  noButton.style.fontSize = `${fontSize * 0.9}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Esta bien no me perdones pero luchare por ganarme tu perdon",
    "no necesito que me perdones de inmediato, te quiero no me rendire!!!!!!!!!!!!!",
    "luchare por tu corazon, por ti",
    "No te defraudare, te demostrare que conmigo puedes confiar ciegamente",
    "por mas tarado que sea aveces o casi siempre, no te fallare",
    "te quiero Mico",
    "acepta y dame una oportunidad,sabre ganarme tu perdon",
    "si sigues de terca en no perdonarme, te tendre que secuestrar",
    "ya me quede sin ideas, TE QUIERO MUCHO YUMICO",
    
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
