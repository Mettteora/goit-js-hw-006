const newEl = document.querySelector(`#counter`);
const spanEL = document.querySelector(`#value`);
const perBtn = newEl.firstElementChild;
const lastBtn = newEl.lastElementChild;
console.log(newEl);
console.log(perBtn);
console.log(spanEL);
let counterValue = 0;
perBtn.addEventListener(`click`, () => {
  counterValue = counterValue - 1;
  spanEL.textContent = counterValue;
});

lastBtn.addEventListener(`click`, () => {
  counterValue = counterValue + 1;

  spanEL.textContent = counterValue;
});
