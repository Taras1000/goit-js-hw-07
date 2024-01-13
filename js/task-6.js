function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

let startSize = 30;

function createBoxes(amount) {
  container.innerHTML = "";
  let currentSize = startSize;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    currentSize += 10;
    container.appendChild(box);
  }
}

function destroyBoxes() {
  container.innerHTML = "";
  startSize = 30;
}

function create() {
  const sum = Number(input.value);
  if (sum <= 100 && sum > 0) {
    createBoxes(sum);
    input.value = "";
  }
}

createButton.addEventListener("click", create);
destroyButton.addEventListener("click", destroyBoxes);