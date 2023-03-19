function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(`.change-color`);
const spanEL = document.querySelector(`.color`);
btnColor.addEventListener(`click`, changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEL.textContent = document.body.style.backgroundColor;
}
